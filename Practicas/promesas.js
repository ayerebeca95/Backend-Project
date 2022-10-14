//Devuelve un numero aleatorio entre 2 numeros pasados por parametros
/*const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const funcionAsincronica = (resolve, reject) => {
    console.log("ejecutando asincronico");

    setTimeout(() => {
        const resultado = between(1, 10)
      if(resultado < 5){
        console.log("mipromesa termina bien");
        resolve(resultado)
      }else {
        console.log("mi promesa termina mal");
        reject('oh no')
      }
}, 1000);
}

const miPromesa = new Promise(funcionAsincronica)
console.log(miPromesa);

//si termina bien me devuelve esta funcion
miPromesa.then((resultado) =>{
    console.log('termino mi promesa');
    console.log(`el resultado es ${resultado}`);
})//cuando termina mal le agrego catch
.catch((err) =>{
    console.log('se ejecuto mal');
    console.log(err.message);
})//termine bien o mal se usa el finally donde se ejecuta independientemente de then y catch
.finally(() =>{
    console.log('fin');
})*/

/*const saludar = (nombre) =>{
    console.log("hola" ${nombre});
}

console.log("Inicio");
const salida = setInterval(saludar, 5000, "jeans carlos")
console.log(salida);

clearSetInterval(2000)*/

//setInterval efecuta la funcion que le pasamos por intervalo, es una funcion nativa, no hace falta ejecutarla

/*function hacerTarea(num, cb) {
    console.log('haciendo tareas' + num )
    setTimeout(cb, 100)
}
//CallbackHall (piramide)
console.log('inicio de tareas');
hacerTarea(1, () => {
    hacerTarea(2, () => {
        hacerTarea(3, () =>{
            console.log('otras tareas ...')
            console.log('fin de tareas');
        })
    })
})*/

//Imprime letra por letra
const palabra = 'hola';
const imprimir = (palabra, demora, cb) => {
    let i = 0;
    const timeId = setInterval(() =>{
        console.log(palabra[i])
        i++;
        if (i >= palabra.length) {
            console.log('terminamos');
            clearInterval(timeId)
            cb()
        }
    }, 1000)
}

const fin = () => console.log('Listongui');

imprimir('aye',  250, fin)
