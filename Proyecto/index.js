class Usuario {
    constructor(nombre, apellido){
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
        cantidad = this.mascotas.length;
        return console.log(`Cantidad de Mascotas: ${cantidad}`);
    }
}

Usuario.getFullName()
console.log(Usuario.getFullName());
