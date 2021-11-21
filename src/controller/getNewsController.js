const cheerio = require('cheerio');
const axios = require('axios');
const UserAgent = require('user-agents');
//const url = 'https://portalcm7.com/ultimas-noticias/'
require('dotenv').config()

const { Pool } = require('pg');
const copia = {};

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
});

const getNewsController = async (req, res) => {
    const response = await pool.query('SELECT distinct tag,enunciado,link from scraping');
    console.log("dados>>>>>>>>>>>>>>>>>>>>>>>>>>",response.rows)
    res.status(200).json(response.rows);
};


module.exports = getNewsController

  