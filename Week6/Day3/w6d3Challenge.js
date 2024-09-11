// Daily Challenge: Currency Converter
// Last Updated: March 7th, 2024

// What You will learn :
// Fetch API
// async await


// Instructions
// You will create a currencies converter:



// image


// In this application we’re going receive data from two asynchronous sources.

// You will use :

// This documentation https://www.exchangerate-api.com/docs/overview
// Create your own API key by signing up https://app.exchangerate-api.com/sign-up  - you will be able to make more requests :)


// 1.  Note
// The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// 2.  First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation https://www.exchangerate-api.com/docs/supported-codes-endpoint

// 3.  To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation https://www.exchangerate-api.com/docs/pair-conversion-requests
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// 4.  Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Currency Converter</title>
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>
//   <div class="converter-container">
//     <h1>Currency Converter</h1>
    
//     <label for="fromCurrency">From:</label>
//     <select id="fromCurrency"></select>
    
//     <label for="toCurrency">To:</label>
//     <select id="toCurrency"></select>
    
//     <label for="amount">Amount:</label>
//     <input type="number" id="amount" placeholder="Enter amount">
    
//     <button id="convert">Convert</button>
//     <button id="switch">Switch</button>
    
//     <p id="result"></p>
//   </div>
  
//   <script src="app.js"></script>
// </body>
// </html>



// //const apiKey = '6689b6d2bf674752dd4f3e03'; 
// const fromCurrencySelect = document.getElementById('fromCurrency');
// const toCurrencySelect = document.getElementById('toCurrency');
// const amountInput = document.getElementById('amount');
// const convertButton = document.getElementById('convert');
// const switchButton = document.getElementById('switch');
// const resultParagraph = document.getElementById('result');

// const apiKey = '6689b6d2bf674752dd4f3e03';  // Replace with your actual API key
// const supportedCodesUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;
// const conversionUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// async function fetchCurrencies() {
//   try {
//     const response = await fetch(supportedCodesUrl);
//     if (!response.ok) throw new Error('Failed to fetch currencies');
//     const data = await response.json();

//     console.log('Currency data:', data);

//     populateDropdowns(data);
//   } catch (error) {
//     console.error('Error fetching currencies:', error);
//     resultParagraph.textContent = 'Error fetching currencies';
//   }
// }

// function populateDropdowns(data) {
//   const { supported_codes } = data;

//   if (!supported_codes || supported_codes.length === 0) {
//     console.error('No supported codes in data');
//     resultParagraph.textContent = 'No currencies found';
//     return;
//   }

//   fromCurrencySelect.innerHTML = '';
//   toCurrencySelect.innerHTML = '';

//   for (const [code, name] of supported_codes) {
//     const optionFrom = document.createElement('option');
//     optionFrom.value = code;
//     optionFrom.textContent = `${name} (${code})`;
//     fromCurrencySelect.appendChild(optionFrom);

//     const optionTo = document.createElement('option');
//     optionTo.value = code;
//     optionTo.textContent = `${name} (${code})`;
//     toCurrencySelect.appendChild(optionTo);
//   }

//   if (fromCurrencySelect.options.length > 0) {
//     fromCurrencySelect.selectedIndex = 0;
//   }
//   if (toCurrencySelect.options.length > 0) {
//     toCurrencySelect.selectedIndex = 1; // Example: default to second currency
//   }
// }

// async function convertCurrency() {
//   const fromCurrency = fromCurrencySelect.value;
//   const toCurrency = toCurrencySelect.value;
//   const amount = parseFloat(amountInput.value);

//   if (!fromCurrency || !toCurrency || isNaN(amount)) {
//     resultParagraph.textContent = 'Please fill in all fields correctly.';
//     return;
//   }

//   try {
//     const response = await fetch(conversionUrl + fromCurrency);
//     if (!response.ok) throw new Error('Failed to fetch conversion rate');
//     const data = await response.json();
//     const rate = data.conversion_rates[toCurrency];
    
//     if (!rate) throw new Error('Conversion rate not found');

//     const convertedAmount = (amount * rate).toFixed(2);
//     const fromCurrencyName = fromCurrency;
//     const toCurrencyName = toCurrency;

//     resultParagraph.textContent = `${amount} ${fromCurrencyName} is equal to ${convertedAmount} ${toCurrencyName}`;
//   } catch (error) {
//     resultParagraph.textContent = 'Error converting currency: ' + error.message;
//   }
// }

// function switchCurrencies() {
//   const fromValue = fromCurrencySelect.value;
//   fromCurrencySelect.value = toCurrencySelect.value;
//   toCurrencySelect.value = fromValue;
//   convertCurrency();
// }

// convertButton.addEventListener('click', convertCurrency);
// switchButton.addEventListener('click', switchCurrencies);


// fetchCurrencies();



// /* Global styles */
// body {
//     font-family: 'Arial', sans-serif;
//     background-color: #f0f4f8;
//     margin: 0;
//     padding: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//   }
  
//   /* Centering the entire form container */
//   .converter-container {
//     background-color: #fff;
//     padding: 2rem;
//     border-radius: 8px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     width: 300px;
//     text-align: center;
//   }
  
//   /* Styling the labels and inputs */
//   label {
//     font-weight: bold;
//     color: #555;
//     margin-bottom: 0.5rem;
//     display: block;
//   }
  
//   select, input {
//     width: 100%;
//     padding: 0.75rem;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     margin-bottom: 1.5rem;
//     font-size: 1rem;
//     text-align: center;
//   }
  
//   /* Convert and Switch Buttons */
//   button {
//     width: 100%;
//     padding: 0.75rem;
//     background-color: #007bff;
//     color: #fff;
//     border: none;
//     border-radius: 4px;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//     margin-bottom: 1rem;
//   }
  
//   button:hover {
//     background-color: #0056b3;
//   }
  
//   /* Result display */
//   p#result {
//     margin-top: 1.5rem;
//     font-size: 1.2rem;
//     font-weight: bold;
//     color: #28a745;
//     text-align: center;
//   }
  


