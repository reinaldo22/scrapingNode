const express = require('express');
const  indexRoutes = require('../src/routes/grava.router');
const  buscaNewsRouter = require('../src/routes/news.Router');
const  morgan = require('morgan');
const app = express();
require('dotenv').config()


app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(morgan('dev'));
app.use(indexRoutes);
app.use(buscaNewsRouter);
app.listen(process.env.APP_API_URL, () => console.log('Server starter'))

