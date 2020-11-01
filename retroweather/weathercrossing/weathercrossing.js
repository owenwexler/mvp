const axios = require('axios');
const WEATHERCROSSING_API_KEY = require('./wc-api-key.js');

const getWeatherCrossingData = (location) => {
  return axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=us&locationMode=single&key=${WEATHERCROSSING_API_KEY}&dataElements=default&locations=${location}`);
}