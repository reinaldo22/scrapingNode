const pg = require('pg');
require('dotenv').config()

const client = new pg.Client({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
});

module.exports = client;