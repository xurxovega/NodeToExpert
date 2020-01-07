const axios = require('axios');

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    timeout: 1000,
    headers: { 'X-RapidAPI-Key': '2b84e1d440mshfb8c4ff801a21a4p1ef66ajsn5a2db787d9c2' }
});

module.exports = {
    instance
}