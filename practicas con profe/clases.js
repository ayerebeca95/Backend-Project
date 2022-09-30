class Cliente {// siempre las clases va la primera letra en mayuscula
    nombre;
    fecha;
    direccion;
    
    constructor(nombre, fecha, direccion){
        this.nombre = nombre;
        this.fecha = fecha;
        this.direccion = direccion;
    }

    mostrar(){
        console.log(this);
    }

    saludar() {
        console.log(`hola mi nombre es ${this.nombre} y vine el dia de hoy ${this.fecha} y mi direccion es ${this.direccion}`);
    }
}

const persona1 = new Cliente('juan calor', 12, 'ernest')
//const persona2 = new Cliente ('pepe', 58, 'lawrence')

persona1.mostrar();
//perosna2.saludar();

Cliente();
console.log((Cliente());)
