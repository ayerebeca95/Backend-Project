const fs = require ('fs');
const path = require('path')//tiene un metodo 

// cuando escribo en la consola pwd me dice la ruta donde estoy parada

//const ruta = '/User/aye/Dropbox/PC/Desktop/Backend-Project/Practicas'


/*fs.readFile(ruta, 'utf-8' , (err, data) =>{
    if(err) threw err;
console.log(data);
})
console.log('fin programa');*/

//console.log(__dirname);//Imprime el directorio donde estamos actualmente ejecutando
// Si pongo en mi consola ls ./ me duelve donde estoy actualmente
const ruta2 = path.resolve(__dirname,'./../index.js')//podemos combinar archivos de afuera y conseguir asi tamboen el path
console.log(ruta2);
/*operacion(param1, param2, param3,(error, data) =>{
    if(err) {
        console.log('operacion');
        console.log(err.message);
        throw new Error(error)

    }

    console.log(`resultado ${data}`);
})*/
