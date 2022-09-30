/*const miObjeto =() => {
    console.log('hola');
}

const saludar= (nombre) =>{
console.log(`hola ${nombre}`);
}*/
/*const saludarSimple = (nombre) => console.log((`hola ${nombre}`));
saludarSimple('aye')*/ //es mas facil de una sola linea

/*const duplicar = valor => valor * 2 ;
console.log(duplicar(10));*/

/*const multiplicar = (valor) =>({
        duplicado: valor *2,
        triplicado: valor *3,
        cuatriplicado: valor *4,
        quintuple: valor *5
    }
)

console.log(multiplicar(5));*/

// FOR EACH ES UNA FUNCION QUE PERMITE RECORRER EL ARRAY Y EJECUTAR
/*array.forEach(aValue *2 => {
    console.log(aValue*2);
});*/

//ejemplo de aumento en cada empleado
const subirSalarios = (empleado) => {
    if (empleado.antiguedad >= 1 && empleado.antiguedad < 3)
     empleado.salario = empleado.salario * 1.25;
    else if(empleado.antiguedad >= 3 && empleado.antiguedad < 5)
    empleado.salario = empleado.salario * 1.4;
    else if (empleado.antiguedad >= 5 && empleado.antiguedad < 5)
    empleado.salario = empleado.salario * 1.45;
    else console.log(`Al empleado ${empleado.nombre} no le toca aumento`);
}    

const empleados = [
    {
        nombre: 'pepe',
        antiguedad: 4,
        salario: 20,
    },
    {
        nombre: 'juan',
        antiguedad: 3,
        salario: 10,
    },
    {
        nombre: 'juana',
        antiguedad: 5,
        salario: 23,
    }
    {
        nombre: 'rebeca',
        antiguedad: 4,
        salario: 15,
    }
]

empleados.forEach(subirSalarios);
console.log(empleados);