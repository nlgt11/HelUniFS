import axios from 'axios'

const getAllCountries = () => axios.get('https://restcountries.eu/rest/v2/all');

const getWeather = countryName => axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${countryName}`);

export default { getAllCountries, getWeather }