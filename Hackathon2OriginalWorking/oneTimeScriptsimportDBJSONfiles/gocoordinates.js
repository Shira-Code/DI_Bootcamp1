const axios = require('axios');
const fs = require('fs');

const addresses = JSON.parse(fs.readFileSync('parking_lots.json', 'utf-8'));

const getCoordinates = async (address) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    try {
        const response = await axios.get(url);
        if (response.data && response.data.length > 0) {
            const { lat, lon } = response.data[0];
            return { lat, lon };
        } else {
            console.error(`No results found for: ${address}`);
            return null;
        }
    } catch (error) {
        console.error(`Error fetching coordinates for ${address}: ${error}`);
        return null;
    }
};

const getAllCoordinates = async () => {
    const results = [];
    for (const { name, address } of addresses) {
        const coords = await getCoordinates(address);
        results.push({ name, address, coords });
    }
    console.log(results);
    fs.writeFileSync('coordinates.json', JSON.stringify(results, null, 2));
};

getAllCoordinates();
