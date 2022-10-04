const data ='gol ARGENTINA/n'
const pathNuevoArchivo = './01-output'
// /n significa salto de linea

// Escritura sincronica
/*try {
    fs.writeFileSync(pathNuevoArchivo, data, (err, salida) =>{
        if (err) console.log('error escritura') 
        throw new Error(err)
           
    }

    console.log('done');
}*/


// Append sincronica
try {
    fs.appendFileAsync(pathNuevoArchivo,data)
} catch (err) {
    console.log('error', err);
}

fs = require('fs')
const pathArchivoBorrar = './esctritura'

// Borrado sincronico
try {
    fs.unlinkSync(pathArchivoBorrar)
} catch (err) {
    console.log('error', data);
}

// Borrado Asincronico
   /* fs.unlinkSync(pathArchivoBorrar, (err, salida) =>{
    if(err){
        console.log('borrado', err)
    }
    })*/


    // DESAFIO FECHA Y HORA
/*const fs = require('fs')
const rutaArchivo = './fyh'

try {
    const fecha = Date()

    fs.writeFileSync(rutaArchivo, fecha)

    const data = fs.readFileSinc(rutaArchivo, 'utf-8')
    console.log(data);
} catch (err) {
    console.log('error', err);
}
*/

