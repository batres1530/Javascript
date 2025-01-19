class Rectangulo {

   #area = 0; // esto es un atributo privado 

    constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.#area = this.base * this.altura;
    }

}
const rectangulo = new Rectangulo(10, 15);

console.log(rectangulo);