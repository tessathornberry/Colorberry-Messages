require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes.js')

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/', router);

app.listen(port, console.log(`Listening on port ${port}`));