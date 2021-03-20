const express = require('express');
const routes = require('./routes')
const porta = process.env.PORTA || 3000;
require('./database')
const app = express();

app.use(express.json());
app.use(routes);

app.listen(porta, ()=>{
    console.log("Servidor node online")
}); 
