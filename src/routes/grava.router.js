const Router = require('express');
const  indeController = require('../controller/createController');
const routes = Router();

routes.get("/index", indeController);



module.exports =  routes;