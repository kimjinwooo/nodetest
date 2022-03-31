const express = require('express');
const fs = require('fs');
const cors = require('cors'); 
const path = require('path');
const bodyParser = require('body-parser');
const { hostname } = require('os');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());

const port = 4000;
app.listen(port, ()=>{
    console.log(port);
});

app.use('/api/member',require('./routes/memberRouter'));