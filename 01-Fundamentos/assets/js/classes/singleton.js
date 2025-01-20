// el siglenton es una clase que se instancia en cualquier laddo

class Singleton {
    
    static instancia; // el siglenton simepre lleva el static
    nombre = '';

    constructor(nombre = ''){
       

        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
           
};

const instancia1 = new Singleton('iroman');
const instancia2 = new Singleton('spiderman');
const instancia3 = new Singleton('Black Panther');
console.log (`Nombre de la instancia2 es ${instancia3.nombre}`);
console.log (`Nombre de la instancia2 es ${instancia2.nombre}`);
console.log (`Nombre de la instancia1 es ${instancia1.nombre}`);