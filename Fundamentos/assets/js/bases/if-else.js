let a = 10;
if (a >= 10) {
    console.log('a es mayor o igual  que 10');
} else {
    console.log('no el numero es : '+a);
}

console.log('fin del programa');

const hoy = new Date();

console.log(hoy);
let dia = hoy.getDay();

console.log({dia});

if (dia === 2) {
    console.log('martes');
} else {    
    console.log('no es martes');
}

// si usar if else o switch unicamente objetos o arrays
dia = 3;
dialetras = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
console.table({dia,dialetras});
console.log(dialetras[dia]||'el dia no existe');
console.log('despues de arreglo');
dialetras2 = {0 :'domingo'
    ,1 :'lunes'
    ,2 :'martes'
    ,3 :'miercoles'
    ,4 :'jueves'
    ,5 :'viernes'
    ,6 :'sabado'
};
console.table(dialetras2[dia]||'el dia no existe');