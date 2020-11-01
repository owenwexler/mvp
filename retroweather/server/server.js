const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());

const getWeatherCrossingData = require('../weathercrossing/weathercrossing.js');

let locations = ['Hyattsville, MD', 'Madison, CT', 'San Francisco, CA', 'New York, NY', 'Washington, DC', 'Virginia Beach, VA'];

app.get('/api/weather/', (req, res) => {
  console.log(req.query.location);
  getWeatherCrossingData(req.query.location)
    .then((result) => {
      res.json(result.data.location);
      res.status(200);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/api/weather/savedlocations/', (req, res) => {
  res.status(200);
  res.json(locations);
});

app.post('/api/weather/', (req, res) => {
  if(!locations.includes(req.body.location)) {
    locations.unshift(req.body.location);
    locations = locations.slice(0, 5);
  }
  res.status(200);
  res.json(locations);
});

app.listen(3000, () => {console.log(`R E T R O W E A T H E R listening on PORT 3000...`)});