const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const menu = require('./routes/menu');
app.use('/menu', menu);

module.exports = app;
