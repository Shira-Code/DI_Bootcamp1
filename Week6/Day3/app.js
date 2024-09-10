
//const apiKey = '6689b6d2bf674752dd4f3e03'; 
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const convertButton = document.getElementById('convert');
const switchButton = document.getElementById('switch');
const resultParagraph = document.getElementById('result');

const apiKey = '6689b6d2bf674752dd4f3e03';  // Replace with your actual API key
const supportedCodesUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;
const conversionUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// Fetch supported currencies and populate dropdowns
async function fetchCurrencies() {
  try {
    const response = await fetch(supportedCodesUrl);
    if (!response.ok) throw new Error('Failed to fetch currencies');
    const data = await response.json();

    // Log data to check structure
    console.log('Currency data:', data);

    populateDropdowns(data);
  } catch (error) {
    console.error('Error fetching currencies:', error);
    resultParagraph.textContent = 'Error fetching currencies';
  }
}

// Populate dropdowns with currency codes and names
function populateDropdowns(data) {
  const { supported_codes } = data;

  if (!supported_codes || supported_codes.length === 0) {
    console.error('No supported codes in data');
    resultParagraph.textContent = 'No currencies found';
    return;
  }

  fromCurrencySelect.innerHTML = '';
  toCurrencySelect.innerHTML = '';

  for (const [code, name] of supported_codes) {
    const optionFrom = document.createElement('option');
    optionFrom.value = code;
    optionFrom.textContent = `${name} (${code})`;
    fromCurrencySelect.appendChild(optionFrom);

    const optionTo = document.createElement('option');
    optionTo.value = code;
    optionTo.textContent = `${name} (${code})`;
    toCurrencySelect.appendChild(optionTo);
  }

  // Set default values if needed
  if (fromCurrencySelect.options.length > 0) {
    fromCurrencySelect.selectedIndex = 0;
  }
  if (toCurrencySelect.options.length > 0) {
    toCurrencySelect.selectedIndex = 1; // Example: default to second currency
  }
}

// Convert currency
async function convertCurrency() {
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const amount = parseFloat(amountInput.value);

  if (!fromCurrency || !toCurrency || isNaN(amount)) {
    resultParagraph.textContent = 'Please fill in all fields correctly.';
    return;
  }

  try {
    const response = await fetch(conversionUrl + fromCurrency);
    if (!response.ok) throw new Error('Failed to fetch conversion rate');
    const data = await response.json();
    const rate = data.conversion_rates[toCurrency];
    
    if (!rate) throw new Error('Conversion rate not found');

    const convertedAmount = (amount * rate).toFixed(2);
    const fromCurrencyName = fromCurrency;
    const toCurrencyName = toCurrency;

    resultParagraph.textContent = `${amount} ${fromCurrencyName} is equal to ${convertedAmount} ${toCurrencyName}`;
  } catch (error) {
    resultParagraph.textContent = 'Error converting currency: ' + error.message;
  }
}

// Switch currencies
function switchCurrencies() {
  const fromValue = fromCurrencySelect.value;
  fromCurrencySelect.value = toCurrencySelect.value;
  toCurrencySelect.value = fromValue;
  convertCurrency();
}

// Event listeners
convertButton.addEventListener('click', convertCurrency);
switchButton.addEventListener('click', switchCurrencies);

// Initial fetch of currencies
fetchCurrencies();
