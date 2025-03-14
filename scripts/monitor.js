const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Definir la URL a monitorizar
const URL = 'https://www.google.com/?hl=es'; 

// Definir la ruta completa al archivo de log
const LOG_DIR = path.join(__dirname, '../logs'); // Directorio de logs
const LOG_FILE = path.join(LOG_DIR, 'monitoring_log.txt'); // Archivo de log

// Asegurarse de que el directorio logs existe, si no lo crea
if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true }); // Crear el directorio recursivamente si es necesario
}

(async () => {
    try {
        const response = await axios.get(URL);
        const logEntry = `${new Date().toISOString()} - ${URL} - Status: ${response.status}\n`;
        fs.appendFileSync(LOG_FILE, logEntry); // Escribir el log
    } catch (error) {
        const logEntry = `${new Date().toISOString()} - ${URL} - Error: ${error.message}\n`;
        fs.appendFileSync(LOG_FILE, logEntry); // Escribir el log en caso de error
    }
})();
