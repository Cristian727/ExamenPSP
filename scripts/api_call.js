const fs = require('fs');
const axios = require('axios');

const API_URL = 'https://api.github.com';
const RESULT_FILE = `logs/api_response_${new Date().toISOString().replace(/:/g, '-')}.json`;

(async () => {
    try {
        const response = await axios.get(API_URL);
        fs.writeFileSync(RESULT_FILE, JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error(`Error al llamar a la API: ${error.message}`);
    }
})();
