const pg = require('pg');
require('dotenv').config()

const client = new pg.Client({
    user: '',
    host: '',
    password: '',
    database: '',
    port: ''
});

module.exports = client;