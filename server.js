const PORT = 8001;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const server = express();

server.use(cors());

server.get("/coordinates", (req, res) => {
  const params = new URLSearchParams({
    q: req.query.location,
    limit: 5,
    appid: API_KEY,
  }).toString();

  const options = {
    method: "GET",
    url: `http://api.openweathermap.org/geo/1.0/direct?${params}`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

server.get("/weather", (req, res) => {
  const params = new URLSearchParams({
    lat: req.query.lat,
    lon: req.query.lon,
    appid: API_KEY,
  }).toString();

  const options = {
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?${params}`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
