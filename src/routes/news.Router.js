const Router = require('express');
const  indeController = require('../controller/createController');
const  getNewsController = require('../controller/getNewsController');
const routes = Router();

routes.get("/getNews", getNewsController);


module.exports =  routes;