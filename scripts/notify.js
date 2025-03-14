require('dotenv').config();
const axios = require('axios');

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const MESSAGE = `GitHub Action ejecutada correctamente en ${new Date().toISOString()}`;

(async () => {
    try {
        await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            params: { chat_id: CHAT_ID, text: MESSAGE },
        });
        console.log('Notificación enviada a Telegram');
    } catch (error) {
        console.error(`Error enviando notificación: ${error.message}`);
    }
})();
