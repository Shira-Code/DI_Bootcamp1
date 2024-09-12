// app.js
import persons from './data.js';

function calculateAverageAge(personArray) {
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / personArray.length;
  console.log(`The average age is: ${averageAge.toFixed(2)}`);
}


calculateAverageAge(persons);
