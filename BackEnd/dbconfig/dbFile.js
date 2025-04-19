const mongoose = require('mongoose');
const express = require('express');
const url = "mongodb://127.0.0.1/PosiDb";
const app = express();
mongoose.connect(url, {useNewUrlParser:true});
const connection = mongoose.connection;
app.use(express.json());
connection.on('open', ()=>{
    console.log('... Connected')
})
