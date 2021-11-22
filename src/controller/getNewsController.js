const cheerio = require('cheerio');
const axios = require('axios');
const UserAgent = require('user-agents');
//const url = 'https://portalcm7.com/ultimas-noticias/'
require('dotenv').config()

const { Pool } = require('pg');
const copia = {};

const pool = new Pool({
    user: '',
    host: '',
    password: '',
    database: '',
    port: ''
});

const getNewsController = async (req, res) => {
    const response = await pool.query('SELECT distinct tag,enunciado,link from scraping');
    
    res.status(200).json(response.rows);
};


module.exports = getNewsController

  