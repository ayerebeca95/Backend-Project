/*const persona = {
    nombre:'aye',
    apellido:'torres'
}

function saludar(persona) {
    console.log(`Hola soy ${persona.nombre} y mi last name is ${persona.apellido} y que lo que jaja`);
}

saludar(persona)*/

//FUNCIONES ANONIMAS
/*const saludar = function(){
    console.log('HOLA');
}
setTimeout(saludar, 5000)*/

//Otro ejemplo de funciones anonimas(mas actual)
/*const saludar = () => {
    console.log('Hola');
}
setTimeout(saludar, 5000)*/

//Closure

/*function classContador() {
    let contador = 0;

    const incrementar = function(){
        contador++;
        return contador
    }

    const decrementar = function (){
        contador--;
        return contador;
    }

    const leer = function (){
        return contador
    }

    return {
        incrementar,
        decrementar,
        leer,
    }

}

const contador1 = classContador()
console.log(contador1.incrementar());//se sumara uno */

//TemplateString 
const nombre = 'Aye';
console.log(`Hola mi nommbre es ${nombre}`);