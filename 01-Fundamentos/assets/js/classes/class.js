class Persona{ // aqui se declara la clase Persona
    
    static _conteo = 0;
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
console.log(iroman);

// esto es el llamado a los métodos de la clase Persona
spiderman.quienSoy();
iroman.quienSoy();

// esto es el llamado a los métodos de la clase Persona
spiderman.miFrase();
//iroman.miFrase();
spiderman.setComidaFavorita ='Pizza';
iroman.setComidaFavorita = 'Donas ';
// spiderman.comida = 'duende verde';
console.log(spiderman.getComidaFavorita);
console.log(spiderman);