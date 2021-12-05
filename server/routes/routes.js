const express = require('express');
const ChartController = require('../controllers/ChartController.js')

const app = express();

app.get(`/`, ChartController.getSampleData);
app.get(`/getMFRatio`, ChartController.getMFRatio);
app.get(`/getBestYears`, ChartController.getBestYears);
app.get(`/getDirGenre`, ChartController.getDirGenre);
app.get(`/getTopMusic`, ChartController.getTopMusic);
module.exports = app;