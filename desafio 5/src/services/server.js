/*const express = require('express');
const RouterPrincipal= require('../routes/index')

const app = express();


// Para poder usar req.body siempre poner estas dos lineas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/staticfolder',express.static('staticfolder'))
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

module.exports = app;*/

const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('../routes/index');
const { ProductosController } = require('../controller/productos')
const viewsFolderPath = path.resolve(__dirname, '../../views');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', viewsFolderPath);
app.set('view engine', 'pug');

app.get('/', (req, res) => {

    res.render('formulario');
    console.log(productos)

})

app.use('/api', mainRouter);

app.use((err, req, res, next) => {

    const status = err.status || 500;
    const message = err.message || 500;

    res.status(status).json({ message });
})

module.exports = app;