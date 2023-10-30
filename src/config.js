const API_KEY = 'f155171607c7d826d5d48a72ef31682f';
const API_UNITS = 'metric';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=${API_UNITS}&appid=${API_KEY}&`;

const lat = 55.7522;
const lon = 37.6155;
// eslint-disable-next-line no-useless-concat
export const getWeather = () => BASE_URL + `lat=${lat}&` + `lon=${lon}`;