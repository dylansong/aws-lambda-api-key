const express = require('express');
const app = express();

const serverless = require('serverless-http');

app.get('/hello',(req,res)=>res.send('hello everybody!serverless express'));
app.post('/posts',(req,res)=>res.send('hello',req.body))
module.exports.handler = serverless(app);


const wxapp = express();
wxapp.get('/wx',(req,res)=>res.send('hello wx handle'));
module.exports.wxhandler = serverless(wxapp);