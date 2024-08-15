# Using the requests and time modules, create a function which returns the amount of time it takes
#  a webpage to load (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, etc.
import requests
import time

def get_load_time(url: str) -> float:
    """Returns the time it takes for a webpage to load."""
    start_time = time.time()  # Record the start time
    try:
        response = requests.get(url)  # Make the HTTP request
        response.raise_for_status()  # Check for request errors
    except requests.RequestException as e:
        print(f"Error fetching {url}: {e}")
        return -1  # Indicate an error occurred
    end_time = time.time()  # Record the end time
    load_time = end_time - start_time  # Calculate the time taken
    return load_time

# Test the function with multiple sites
urls = [
    "https://www.google.com",
    "https://www.ynetnews.com",
    "http://www.imdb.com",
    "https://www.nytimes.com",
    "https://www.cnn.com",
    "https://www.bbc.com",
    "https://www.foxnews.com",
    "https://www.usatoday.com",
    "https://www.haaretz.com"
  
]

for url in urls:
    load_time = get_load_time(url)
    if load_time != -1:
        print(f"Time to load {url}: {load_time:.2f} seconds")
    else:
        print(f"Failed to load {url}")



