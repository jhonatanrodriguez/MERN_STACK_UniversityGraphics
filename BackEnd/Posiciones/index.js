const express = require('express');
const app = express();
const cors = require('cors');
const posicionRouter = require('./posicionRouter');
app.use(express.json());
app.use(cors());
app.use(posicionRouter);
app.listen(9000, ()=>{ 
    console.log('listening on port 9000')});
