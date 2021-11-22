const Router = require('express');
const  getNewsController = require('../controller/getNewsController');
const routes = Router();

routes.get("/getNews", getNewsController);


module.exports =  routes;