class Persona{ // clase Persona
    
    // intancias staticas 
    static porObjeto( {nombre, apellido, pais} ){
        return new Persona(nombre, apellido, pais);
    }

    // contructor
    constructor(nombre, apellido, pais){
        this.nombre     = nombre;
        this.apellido   = apellido;
        this.pais       = pais;
    }
    // método 
    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
    // una clase solo puede tener un solo contructor 
}
// variables de la instancia
const nombre1 = 'david', apellido1 = 'Martinez', pais1 = 'Honduras';

const fher =  {
    nombre:     'fher',
    apellido:   'hernandez',
    pais:       'Honduras'
}
// Instancia de la clase Persona
const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fher);
// se llama al método getInfo
persona1.getInfo();
persona2.getInfo();




