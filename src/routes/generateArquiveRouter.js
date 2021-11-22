const Router = require('express');
const  generateArquive = require('../controller/arquiveController');
const routes = Router();

routes.get("/arquive", generateArquive);


module.exports =  routes;