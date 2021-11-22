const express = require('express');
const  buscaNewsRouter = require('../src/routes/news.Router');
const generateArquive = require('../src/routes/generateArquiveRouter');
const  morgan = require('morgan');
const createNews = require('./controller/recordNewsController');
const app = express();
require('dotenv').config()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
createNews();
app.use(buscaNewsRouter);
app.use(generateArquive);
app.listen(process.env.APP_API_URL, () => console.log('Server starter'))

