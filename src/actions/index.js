import axios from 'axios';
const API_KEY = "e3415ebd8f9d067c5f2af6196d4e5a11";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';
// don't really get this it has to do with reducing chances of hard to fix errors
// we will be using this const in other files

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},tw`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
        // redux promise will will take this payload which is a promise and resolves it
        // it unwraps the promise and gives us our object(s)
    };
}