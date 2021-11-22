const xl = require('excel4node');
const wb = new xl.Workbook();
const ws  = wb.addWorksheet("Nome de teste");

const { Pool } = require('pg');

const pool = new Pool({
    user: '',
    host: '',
    password: '',
    database: '',
    port: ''
});

const getConsult = async(req, res) =>{
    const response = await pool.query('SELECT portal,categoria,data,enunciado, link from scraping');

    const data = await response.rows.map( a => a)
    console.log("Resultado da consulta===================>>>>>>>", data)

    try {
        const headingColumnNames = [
            "PORTAL",
            "CATEGORIA",
            "DATA",
            "ENUNCIDADO",
            "LINK"
        ]
    
        //Vai ser escrito no inicio da planilha
        let headingColumnIndex = 1;
        headingColumnNames.forEach(heading =>{
            ws.cell(1, headingColumnIndex++).string(heading)
        })
    
        let rowIndex =2;
        data.forEach(record =>{
            let columnIndex = 1;
            Object.keys(record).forEach(columnName =>{
                ws.cell(rowIndex, columnIndex++).string(record[columnName])
                
            })
            rowIndex++;
        })
        wb.write("arquivo.xlsx");
    
        return res.status(200).json({message: "Arquivo criado com sucesso!"})
    } catch (error) {
        return res.status(200).json({message: `Erro ${error}`})
    }

    //Nome das colunas
   
}



module.exports = getConsult;