
const elMayor=(a,b) => (a > b) ? a : b;

const tieneMembresia = (miebro) => (miebro) ? 'Tiene mebresia 2 dolares ' : 'no es miebro 10 dolares';


console.log(elMayor(30,20));
console.log(tieneMembresia(false));

const amigo =  true;
const amigosArr =  [
    'peter',
    'tony',
    'dr. string',
    amigo ? 'thor' : 'loki',
    // (()=> 'Nick Fury')()
   elMayor(30,20)
];

console.log(amigosArr);

const notas = 89.99999999999999999;
notas  >= 100 ? 'el limite de la nota es 100' : 'la nota no puede ser mayor a 100';

const grado = notas >= 100 ? 'A++' : notas >= 90 ? 'A+' : notas >= 80 ? 'b' : notas >= 70 ? 'f' : 'f-' ;

console.log(grado, notas);

const sacha = true;
const encuestaSacha = sacha ? 'Sacha quiere a pamela' : 'Sacha no quiere a pamela';
console.log(encuestaSacha);

const pamela = false;
const encuestaPamela = pamela ? 'Pamela quiere a sacha' : 'Pamela no quiere a sacha';
console.log(encuestaPamela);


