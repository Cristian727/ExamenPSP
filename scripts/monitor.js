const fs = require('fs');
const axios = require('axios');

const URL = 'https://www.google.com/?hl=es'; 
const LOG_FILE = 'logs/monitoring_log.txt';

(async () => {
    try {
        const response = await axios.get(URL);
        const logEntry = `${new Date().toISOString()} - ${URL} - Status: ${response.status}\n`;
        fs.appendFileSync(LOG_FILE, logEntry);
    } catch (error) {
        const logEntry = `${new Date().toISOString()} - ${URL} - Error: ${error.message}\n`;
        fs.appendFileSync(LOG_FILE, logEntry);
    }
})();
