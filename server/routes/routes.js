const express = require('express');
const ChartController = require('../controllers/ChartController.js')

const app = express();

app.get(`/`, ChartController.getSampleData);

module.exports = app;