class Persona{ // aqui se declara la clase Persona
    
    static _conteo = 0;
    static get conteo (){
        return Persona._conteo + ' instancias';
    }
    static mensaje(){
        console.log(this.nombre); // undefined
        console.log('Hola a todos, soy un método estático');
    }

    // aqui se declaran las propiedades de la clase Persona
    nombre = ''; 
    codigo = '';
    frase = '';
    comida = '';
    // aqui se declara el constructor de la clase Persona
    constructor (nombre ='sin nombre', codigo= 'sin Codigo', frase= 'sin Frase')  { // aqui se declara el constructor de la clase Persona
      

        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
        Persona._conteo++;
       
    }
    // aqui se declara los set y get de las propiedades de la clase Persona
    // el set es para establecer el valor de la propiedad
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }
    // e; get es recuperar un valor 
    get getComidaFavorita(){
        return `La comida Favorita de ${this.nombre} es ${this.comida}`;
    }


    // esto es un método 
    quienSoy() { 
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}` );
    }
    miFrase() { 
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

};


const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const iroman = new Persona('Tony Starck', 'Iroman', 'I am Iron Man');

// console.log(iroman);

// esto es el llamado a los métodos de la clase Persona
spiderman.quienSoy();

// esto es el llamado a los métodos de la clase Persona
spiderman.miFrase();
//iroman.miFrase();
spiderman.setComidaFavorita ='Pizza';
// spiderman.comida = 'duende verde';
// console.log(spiderman.getComidaFavorita);
console.log(spiderman);
// Persona._conteo= 2;
console.log('Conteo estatico:', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.PropiedadExterna = 'Esta es una propiedad externa';
console.log(Persona);