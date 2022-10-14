

//! Esta es la class = clase
/*class Usuario {
    //! Nombre y luego pones Name      
    constructor(name, apellido){ //!Este es el metodo constructor
        this.name = name;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = []
    }
    getFullName(){
        return console.log(`${this.name}, ${this.apellido}`);
    }

    addMascota(name){
        this.mascotas.push(name);
        return console.log(`Se añadió a Mascotas: ${name}`);
    }

    countMascotas(){
        //! aca falto agregar el CONST para que se guarde en la memoria de la pc 
        const cantidad = this.mascotas.length;
        return console.log(`Cantidad de Mascotas: ${cantidad}`);
    }
}


//!deberia ser asi la instanciacion de la clase
const usuario1 = new Usuario("Rebeca", "Torres");

usuario1.getFullName();
usuario1.addMascota("perro");
usuario1.addMascota("gato");
usuario1.countMascotas();

*/
//! La clase sirve para crear objetos del metodo constructor que le armas

//! Antes corrias el programa y daba error, por eso tenes que leer la consola para ver si esta bien tu programa
//! o hay errores, ahora si lo corres va a andar bien, avisame cualquier duda

//Desafio 1

/*class Usuario  {
    constructor (nombre, apellido ,libros, mascotas) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.libros   = libros;
        this.mascotas = mascotas;  
    }

    getFullName () {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota (nuevaMascota) {
      this.mascotas.push(nuevaMascota)
      return nuevaMascota
    }

    countMascotas () {
        return this.mascotas.length 
    }

    addBook (nombre,autor) {
        return this.libros.push({nombre,autor})
    }

    getBookNames () {
        return this.libros.map(item => item.nombre)
    }
}

const usuario = new Usuario (
    'M',
    'Robi',
    [ {nombre:'Lotr' , autor:'J. R. R. Tolkien'} , {nombre:'Lotf' , autor:'William Golding'} ],
    ['Loco','Juana'])
 
usuario.addBook('Harry','JK ROLLING')   
console.log(`${usuario.getFullName()}\n${usuario.addMascota('Chiche')}\n${usuario.countMascotas()}\n${usuario.getBookNames()}` )
// console.log(`aa ${usuario.getFullName()} ${usuario.addMascota('Chiche')} ${usuario.countMascotas()} ${usuario.addBook('Harry','JK ROLLING')} ${usuario.getBookNames()}`)
// console.log(` ${usuario.getBookNames('asd')} `)

 








// DESAFIO 2

const fs = require('fs');



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

test()*/

