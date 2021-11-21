const { insertTable } = require('../databases/insertTable')
const db = require('./database');





async function main(){
    
    const userAget = await new UserAgent();
    const { data } = await axios.get(url, {
        'User-Agent': userAget.toString()
    })
    const $ = cheerio.load(data);
    const d =  $('.list-news').map((index, element)  =>  {
        
        let portal = 'Portal cm7';
        let categoria = $(element).find('.cat-small').text();
        let data = $(element).find('.dt-arquive').text();
        let tag = $(element).find('h4').text();
        let enunciado = $(element).find('p').text();
        let link = $(element).find('a').attr('href');

        dados = {portal,data, tag, enunciado, link, categoria}
        console.log("INSERINDO>>>>>>>>>>>>>>>>>>>>",dados)
       return   dados;
            
    })

    
    
}

main();
