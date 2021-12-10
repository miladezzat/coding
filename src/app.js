const express = require('express');
const cookieParser = require('cookie-parser');

const registrationRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

registrationRoutes(app);

module.exports = app;
