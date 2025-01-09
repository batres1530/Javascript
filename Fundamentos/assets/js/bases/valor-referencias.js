let a = 10;
let b = a;
a = 20;
console.log({a,b});




let juan = {nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';
console.log({juan,ana});



const cambiaNombre = ({...persona})=>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);
console.log({peter,tony});

// arreglos
const frutas = ['manzana','pera','limon'];

console.time('slice');
const  otrasFrutas = [...frutas];
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = frutas.slice();
console.timeEnd('spread');

// otrasFrutas.push(); es para agregar elementos al final
// otrasFrutas.pop(); es para eliminar el ultimo elemento
// otrasFrutas.unshift(); es para agregar elementos al principio
// otrasFrutas.shift(); es para eliminar el primer elemento

otrasFrutas.push('Mango');
frutas.push('Mango','Kiwi');
console.table({frutas,otrasFrutas});
