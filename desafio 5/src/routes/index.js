/*const express = require('express');
const productosRouter = require('./productos');
const router = express();

router.use('/productos', productosRouter);

module.exports = router;*/

const Server = require('./services/server');

const PORT = 8080;

Server.listen(PORT, () => {
    console.log('Server escuchando en el puerto', PORT);
});