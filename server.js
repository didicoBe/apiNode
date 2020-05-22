const express = require('express');
const mongoose  = require('mongoose');
const require_dir = require('require-dir');
const cors = require('cors');





//iniciou o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciar o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true});
require_dir('./src/models');


app.use('/api',require('./src/routes')); 


//informamos a porta da aplicação
app.listen(3001);