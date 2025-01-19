const fher = { 
    nombre : 'Fernado',
    edad : 20,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
    };

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
};

// fher.imprimir();

function Personas(nombre, edad){
    console.log('se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;
}
const maria = new Personas('Maria', 20);
console.log(maria);