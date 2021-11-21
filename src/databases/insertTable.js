const db = require('./database');
const pg = require('pg')


async function insertTable(portal, categoria, data, tag, enunciado, link){
    await db.connect()

    await db.query(`'INSERT INTO scraping (portal, categoria, data, tag, enunciado, link) VALUES ($1, $2, $3, $4, $5, $6)', [${portal}, ${categoria}, ${data}, ${tag}, ${enunciado}, ${link}]`)

    await db.end()
    console.log("INSERIDO")

    return db;
}

module.exports = {
    insertTable
};
