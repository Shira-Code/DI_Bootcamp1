🌟 Exercise 1: DVD Rental
Instructions

-- Get a list of all the languages, from the language table.

SELECT * FROM language;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.

SELECT f.title AS film_title, f.description, l.name
FROM film f
JOIN language l ON f.language_id = l.language_id;

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.

SELECT l.name, f.title AS film_title, f.description
FROM language l
LEFT JOIN film f ON l.language_id = f.language_id;


-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.

CREATE TABLE new_film (
	id serial primary key,
    name VARCHAR(255) NOT NULL
);

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

CREATE TABLE customer_review (
    review_id serial primary key,
    film_id INT NOT NULL,
    language_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10) NOT NULL,
    review_text TEXT,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.


INSERT INTO customer_review (film_id, language_id, title, score, review_text) VALUES
(1, 1, 'Boring', 8, 'Amazing'),
(2, 1, 'Lame', 6, 'eh');
select * from customer_review;

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

DELETE FROM new_film WHERE id = 1;
Because of the ON DELETE CASCADE constraint in the customer_review table, deleteing from new_film table will delete the related reviews on the customer_reviews table.


🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

UPDATE film
SET language_id = 3
WHERE film_id IN (1, 2);

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

customer_address_id_fkey

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

DROP TABLE customer_review;

It's important to check if other tables or constraints depend on this table


-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

SELECT f.title, f.rental_rate
FROM rental r
JOIN film f ON r.rental_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description LIKE '%sumo wrestler%'
AND a.first_name = 'Penelope'
AND a.last_name = 'Monroe';

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title
FROM film
WHERE length < 60
AND rating = 'R';


-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

SELECT f.title
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN film f ON r.rental_id = f.film_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND f.rental_rate > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';


-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT f.title
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN film f ON f.film_id = f.film_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND (f.title LIKE '%boat%' OR f.description LIKE '%boat%')
AND f.replacement_cost > 20;