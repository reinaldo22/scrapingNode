const cheerio = require('cheerio');
const axios = require('axios');
const UserAgent = require('user-agents');
const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
});

const salvandoDados = async(linhas) =>{
    
    try {
    await pool.query(`INSERT INTO scraping(portal,categoria,data,tag,enunciado,link) VALUES ($1,$2,$3,$4,$5,$6)`,[linhas.portal, linhas.categoria,linhas.data,linhas.tag,linhas.enunciado,linhas.link])
    console.log('ok!')
} catch (error) {
    console.log("erro aqui>>>>>>>>>>>>>>>>>", error)
}

}


const gravando = async(linhas) => {
    
    //portal,data, tag, enunciado, link, categoria
    const dados = {
        portal:linhas.portal,
        categoria:linhas.categoria,
        data:linhas.data,
        tag:linhas.tag,
        enunciado:linhas.enunciado,
        link:linhas.link
    }

    try {
    const response = await pool.query('SELECT * FROM scraping WHERE tag = $1',[dados.tag])
    const arrB =  response.rows.map(b => b.tag)
    //console.log("ARRb>>>>>>>>>>>>>>>", await arrB[0])
    let countResult = arrB.length
    if(countResult ===  0){
        salvandoDados(dados)
    }else{
        console.log('Tag ja cadastrada!')
    }
    
    
    } catch (error) {
        console.log("erro aqui>>>>>>>>>>>>>>>>>", error)
    }
    
}



async function createNews(req, res){
 
    const url = 'https://portalcm7.com/ultimas-noticias/'

    const userAget = await new UserAgent();
    const { data } = await axios.get(url, {
        'User-Agent': userAget.toString()
    })
    const $ = cheerio.load(data);
    let dados = {};
    
    const d =  $('.list-news').each((i, element) =>{
        const portal = 'portal cm7';
        const categoria = $(element).find('.cat-small').text();
        const data = $(element).find('.dt-arquive').text();
        const  tag = $(element).find('h4').text();
        const enunciado = $(element).find('p').text();
        const  link = $(element).find('a').attr('href');

        dados = {portal, categoria, data, tag, enunciado, link};
        
        gravando(dados);

    })
    
    
    
    return dados;
}

/*
let topo = 6;
let count = 2;
async function pegaDados(){
    
    while(count <= topo){
        
        const urlFilho = `https://portalcm7.com/ultimas-noticias/page/${count}/`
        const objt = createNews(urlFilho)
        await createNews(urlFilho)
        
        count ++

    }
}

*/

module.exports = createNews
  