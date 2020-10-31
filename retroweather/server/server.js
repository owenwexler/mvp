const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());

const locations = ['Hyattsville, MD', 'Madison, CT', 'San Francisco, CA', 'New York, NY', 'Washington, DC', 'Virginia Beach,VA'];

app.get('/api/weather/', (req, res) => {
  console.log(req.query.location);
  res.status(200).send(req.query.location);
});

app.post('api/location/', (req, res) => {
  if(!locations.includes(req.body.location)) {
    locations.push(req.body.location)
  }
});

app.listen(3000, () => {console.log(`R E T R O W E A T H E R listening on PORT 3000...`)});