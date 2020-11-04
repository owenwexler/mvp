const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());

const getWeatherCrossingData = require('../weathercrossing/weathercrossing.js');

let locations = ['New York, NY', 'Dallas, TX', 'San Francisco, CA'];

app.get('/api/weather/', (req, res) => {
  getWeatherCrossingData(req.query.location)
    .then((result) => {
      res.status(200).json(result.data.location);
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

app.listen(3000, () => {console.log(`S U P E R R E T R O W E A T H E R server listening on PORT 3000...`)});