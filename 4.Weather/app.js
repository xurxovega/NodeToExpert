const argv = require('./config/yargs');
var { getCityLatLng} = require('./core/city');
var { getWeatherByLatLng } = require('./core/weather');
//const instance = require('./config/axios');

let getInfo = async (city) => {
    try {
        let cityData = await getCityLatLng(encodeURI(city));
        let weatherCity = await getWeatherByLatLng(cityData.lat, cityData.lng);
        return `The max Tmp of ${city} is: ${weatherCity.main.temp_max}`;
    } catch (error) {
        return `Not possible to determinate weather of the city ${city}`;
    }
}


getInfo(argv.argv.city)
    .then(msg => console.log(msg))
    .catch(e => console.log(e));