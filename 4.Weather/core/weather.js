const axios = require('axios');

const getWeatherByLatLng = async (latitude, length) => {

    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ length }&appid=8d00d59f8e523b9bb0d146f0349e3be1&units=metric`);
    return response.data;
}

module.exports = {
    getWeatherByLatLng
}