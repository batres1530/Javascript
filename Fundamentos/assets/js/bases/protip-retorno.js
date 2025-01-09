// function crearPersona(nombre,apellido){
//     return {nombre,apellido }
// }

const crearPersona2 = (nombre,apellido)=> ({nombre,apellido})
const persona = crearPersona2('Fernado','Herrera');

console.log(persona);

function imprimirArgumento(){
    console.log(arguments);
}
imprimirArgumento(10,true,false,'fernando','hola');

const imprimirArgumento2 = (...arguments)=> 
{
    console.log(arguments);
}
imprimirArgumento2(10,true,false,'fernando','hola');

const tony={
    nombre: 'Tony stark',
    codeName: 'Iron man',
    vivo:false,
    edad:40,
    trajes: ['Mark I','mark V','Hulkbuster'], 
};

// const imprimePropiedades = (personajes) => {
// console.log('nombre',personajes.nombre);
// console.log('codeName',personajes.codeName);
// console.log('vivo',personajes.vivo);
// console.log('edad',personajes.edad);
// console.log('trajes',personajes.trajes);
// };


const imprimePropiedades2 = ({nombre,codeName,vivo,edad,trajes}) => {
console.log({nombre});
console.log({codeName});
console.log({vivo});
console.log({edad});
console.log({trajes});
}
imprimePropiedades2(tony);