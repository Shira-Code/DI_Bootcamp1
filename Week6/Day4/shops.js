// shop.js

// Require the products array from products.js
const products = require('./products.js');

// Function to search for a product by name
function findProductByName(name) {
  const product = products.find(product => product.name === name);
  if (product) {
    return product;
  } else {
    return `Product with name "${name}" not found.`;
  }
}

// Test the function with different product names
console.log(findProductByName('Laptop')); // Should print details of the Laptop
console.log(findProductByName('Coffee Maker')); // Should print details of the Coffee Maker
console.log(findProductByName('Smartphone')); // Should print details of the Smartphone
console.log(findProductByName('Nonexistent Product')); // Should indicate product not found
