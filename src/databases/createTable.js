const db = require('../databases/database')

async function createTable(){
    await db.connect()
    await db.query(`CREATE TABLE scraping(
        id serial PRIMARY KEY,
        portal VARCHAR(50),
        categoria VARCHAR(500),
        data VARCHAR(50),
        tag VARCHAR(500),
        enunciado VARCHAR(500),
        link VARCHAR(500)
        )`
    )
    await db.end()
    console.log("INSERIDO")

    return db;
    
}
createTable()