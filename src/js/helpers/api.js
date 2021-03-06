import { fetchData, fetchCities } from './fetchData';

const weatherSearchUrl = "https://www.metaweather.com/api/location/";

const locationSearchUrl = "https://www.metaweather.com/api/location/search/?query=";

const corsProxyUrl = `https://yacdn.org/proxy/`;

const getWeatherData = city => fetchData(locationSearchUrl, weatherSearchUrl, city, 'woeid', corsProxyUrl);

const listCities = term => fetchCities(locationSearchUrl, term, corsProxyUrl);

export { getWeatherData, listCities };