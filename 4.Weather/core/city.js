const axios = require('axios');

let getCityLatLng = async (city) => {

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${city}`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': '2b84e1d440mshfb8c4ff801a21a4p1ef66ajsn5a2db787d9c2' }
    });

    const response = await instance.get();
    const data = response.data.Results;

    if (data.length === 0) {
        throw new Error(`There're NO results for ${city}`);
    } else {
        return {
            name: data[0].name,
            lat: data[0].lat,
            lng: data[0].lon
        };
    }

    /*     instance.get()
            .then(function (response) {
                if (response.status === 200) {
                    let city = response.data.Results[0];
                    //console.log(city.lat);
                    return { name: city.name, 
                             lat: city.lat, 
                             lng: city.lon };
                }
            })
            .catch(function (error) {
                console.log(error);
            });
         */
}


module.exports = {
    getCityLatLng
}