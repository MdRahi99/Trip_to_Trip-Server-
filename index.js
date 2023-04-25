const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const packages = require('./Data/packages.json');

app.get('/', (req, res) => {
    res.send('Trip to Trip Server Running');
});

app.get('/packages', (req, res) => {
    res.send(packages);
});

app.listen(port, () => {
    console.log("Trip to Trip Server Running On Port:", port);
});