
function saludar(nombre){
    // console.log(arguments);
    // console.log('Hola '+nombre);
    return ;
    // cuando el codigo de abajo no se ejecutara, se ejecutara el codigo que esta arriba
    console.log('Soy un codigo que esta despues del return');
}

const saludar2 = function(nombre){
    console.log('Hola '+nombre);
}

const saludarFlecha = ()=>{
    console.log('hola Flecha');
}
const saludarFlecha2 = (nombre)=>{
    console.log('hola Flecha '+nombre);
}
const retornoDeSaludar = saludar('Juan','edad');
console.log(retornoDeSaludar);
saludar2('pedro');
saludarFlecha2('melisa');
saludarFlecha();

function sumar(a,b){
    return a+b;
}
console.log(sumar(1,2));

const sumar2 = (a,b)=>{
    return a+b;
}
console.log(sumar2(2,2));


function getAleatorio(){
return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());




// mi practica
// function restar (a,b){
//     return a-b;
// }
// console.log(restar(2,2));

// const restar2 = (a,b)=> a-b;

// console.log(restar2(17,2));

// function multiplicar(a,b){
//     return a*b;
// }
// console.log(multiplicar(2,2));

// const multiplicar2 = (a,b)=> a*b;
// console.log(multiplicar2(5,3));

// function dividir (a,b) {
//     return a/b;
// }
// console.log(dividir(20,2));
//  const dividir2 = (a,b) => a/b;
//  console.log(dividir2(30,2))