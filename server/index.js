const express = require('express');
const axios = require('axios');
const home = require('./routes/home');


app.use('/', home)