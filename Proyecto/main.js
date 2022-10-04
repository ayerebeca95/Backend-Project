/*const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const objetoFinal = {}
console.log(objetoFinal[1]);

for (let i = 0; i<10000; i++) {
    const resultado = between(1,20);
    
    if (objetoFinal[resultado]) {
        objetoFinal[resultado] = objetoFinal[resultado] + 1;
    

    } else {
        objetoFinal[resultado] = 1;
    }
}
console.log(objetoFinal);*/

const productos = [
    {id: 1, nombre: 'escuadra', precio: 1.24},
    {id: 2, nombre: 'calculadora', precio: 1.28},
    {id: 3, nombre: 'globo terraqueo', precio: 1.20},
    {id: 4, nombre: 'paleta pintura', precio: 1.18},
    {id: 5, nombre: 'reloj', precio: 1.22},

]

/*const salida = productos.map((unProducto) => unProducto.nombre)
console.log(salida);

const salida2 = salida.join(',')// join lo hace que con coma o lo que le ordenes
console.log(salida2);*/
/*for (let i = 0; i < productos.length; i++){
    const unProducto = productos[i];
    salida2.push(unProducto.nombre)
    
}*/

//Suma total de todos los precios
/*let ejercicioB = 0;
productos.forEach((unProducto) => {
    ejercicioB += unProducto.precio
})

let ejercicioC = ejercicioB / productos.length;
cconsole.log(ejercicioC)*/
const productos = [4412, 698, 22,55]

const comp = (a, b) => {
    if (a.precio > b.precio) return -1;
    else 1
}
console.log(productos.sort(comp));
