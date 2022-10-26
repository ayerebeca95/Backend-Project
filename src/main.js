//nodemon es una libreria que permite mantener el programa corriendo y si haces un cambio lo reinicia

/*const moment = require('moment')

const miCumple = moment('07-11-1993', 'DD-MM-YYYY');
const now = moment();

console.log('Hoy es', now.format('DD-MM-YYYY'));
console.log('Naci el', miCumple.format('DD.MM-YYYY ===> dddd'));// Las cuatro d representan el nombre del dia que representamos osea el dia actual.

const diferenciaDias  = now.diff(miCumple,'days');
const diferenciaAnios = now.diff(miCumple, 'years')

console.log(`Desde mi nacimiento han pasado ${diferenciaDias} años`);
console.log(`Desde mi nacimiento han pasado ${diferenciaAnios} years`);
*/

//const http = require('http');

//const logicaServer =
// Atraves de la pagina en localhost:8080 podemos ver lo que se ejecuta en i comando de visual me dice que el servidor esta escuhando
/*const server = http.createServer((peticion, respuesta) =>{
    console.log('llego peticion');

    //console.log(peticion);
    //console.log(respuesta);
    respuesta.end('Hola mundo')
})


const conecctedServer = server.listen(8080, () =>{
    console.log(`servidor http escuchando ${conecctedServer.address().port}`);
})*/

//DESAFIO EN CLASE DE FECHA Y HORA CON MENSAJE EN LOCALHOST:8080
/*const http = require('http');

const obtenerMensaje = () => {
const fyh = new Date();
const hora = fyh.getHours();

let msg= 'buenos dias';

if (hora >= 13 && hora <= 19) msg = 'Buennos dias';

if (hora >= 20 || hora <= 5) msg = 'Buennas noches';

return msg
}

const server = http.createServer((resquest, response) =>{
    const mensaje = obtenerMensaje();
    response.end(mensaje)
})

const puerto = 8080;
server.listen(puerto, () =>{
    console.log('Servidos escuchando a http', puerto);
})*/

/*
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

class Contenedor {
   constructor(archivo){
    this.archivo = archivo;

   }

   async read(){
    try {
        let data = await fs.promises.readFile(`./${info.txt}`, 'utf-8')
        return data;
    } catch (err) {
        throw Error(`Error del archivo ${err}`);
        
    }
   }

   async write(datos, msg){
    try {
       await fs.promises.writeFile(`./${info.txt} `, JSON.stringify(datos,null, 2)) 
       console.log(msg);
    } catch (err) {
        throw Error(`error al esctibir el archivo ${err}`)
    }
   }



   async save(){
    let newId =1;
    let newProduct = {};

    let data = await this.read()
    let datos = JSON.parse(data)

    if (!data) {
        product.id = newId;
        newProduct = [product]
    } else {
       product.id = datos[datos.length -1].id +1 
    }
    datos.push(newProduct)

    await this.write(datos, 'añadido')
 }
    async getById(myId){
        let data = await this.read();
        let datos = JSON.parse(data);

        let result =datos.filter(product => product.id == myId)
        return result
    }

    async getAll(){
        let data = await this.read();
        let datos = JSON.parse(data);
        
        return datos
    }

    async deleteById(myId){
        let data = await this.read();
        let datos = JSON.parse(data);

        let product =datos.find(product => product.id ==myId);
        if (product) {
            let index = datos.indexOf(product);
            console.log(index);
            datos.splice(index,1)
            await this.write(datos, `Productos con ID: ${myId} eliminado`)
            
        } else {
            console.log(`Productocon ID : ${myId} no existe`);
        }

    }

    async deleteAll(){
        let data = [];
        await this.write(data, 'Se eliminaran todos los productos')
    }
   }

   module.exports = Contenedor;

   let contenedor = new Contenedor('./info.txt')

   async function test() {
    const newProduct = {
        title: 'Producto',
        price: 12000,
        thumbnail : 'link'
    }
   await contenedor.save(newProduct)
   console.table(await contenedor.getById(2))
   console.table(await contenedor.getAll())
   await contenedor.deleteById(6)
}

test()


let contador = 0;

app.get('/', (req, res) =>{
    contador++;
    res.send(`<h1 style="color: blue">Bienvenidos</h1>`)
})

app.get('/visitas', (req, res) =>{
    contador++
})

app.get('/fyh', (req, res) =>{
    contador++;
    const fyh = new Date();
    res.send({
        fyh
    })
})

//Ponemos a escuchar al servidor
const server = app.listen(PORT, () =>{
    console.log(`servidor http escuchando en el puerto ${server.address().port}`);
})

server.on('error', error => console.log(`error del servidor ${error}`))

*/

const server = require('./services/server')
const express = require('express')

const puerto = 8080;

server.listen(puerto, () => {
  console.log(`servidor listo escuchando ${puerto}`);
});


// INICIALIZACION API con EXPRESS
/* 
const app = express()
  const puerto = 8080;
  const server = app.listen(puerto, () =>
    console.log('server up en puerto', puerto)
  )

  server.on('error, (err) =>{
    console.log('error atajado', err)
  })

  app.use(espress.json());
  app.use(express.urlencoded({extended : true}))*/