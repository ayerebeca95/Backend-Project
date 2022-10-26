const express = require('express');
const RouterPrincipal= require('../routes/index')

const app = express();


// Para poder usar req.body siempre poner estas dos lineas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/p7grstaticfolder',express.static('staticfolder'))
app.use(express.static('public'));

app.use((req, res, next) =>{
   const headers = req.headers;

   if (headers.nombre !== 'aye') {
     return res.status(400).json({
        msg:'solo aye puede entrar'
     })
   }
next()
})

app.use('/api', RouterPrincipal);

module.exports = app;