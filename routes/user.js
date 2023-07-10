const express = require('express');
const routes=express.Router();
const user=require('../controllers/user')
routes.post ('/users/create',user.create)
routes.post('/users/login',user.login)

module.exports=routes