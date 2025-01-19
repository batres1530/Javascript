

const regresarTrue = () => {
    console.log('regresarTrue');
    return true;
}


const regresarFalse = () => {
    console.log('regresarflase');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresarTrue());
console.log();
console.warn('And');
console.log(true && true); // true
console.log(true && !false); // false
console.log('============================================='); 
console.log(regresarFalse() && regresarTrue()); 
console.log(regresarTrue() && regresarFalse());
regresarTrue() && regresarFalse();
console.log('=============================================');
console.warn('Or');
console.log(true || false); // true
console.log(false || false); // true


console.log(regresarTrue() || regresarFalse());
console.log(regresarTrue() && regresarFalse());


console.warn('Assignacion');

const soyUndefined = undefined;
const soynull= null;
const soyfalse = false;

const a1 = true && 'Hola Mundo' && 150; // asigna el ultimo valor en and o si hay un False va a evaluar el false 
const a2 ='hola' && 'mundo' && soyfalse; 
const a3 = soyfalse || 'Ya no soy falso';
const a4 = soyfalse || soyUndefined ||soynull || 'Ya no soy falso de nuevo' ;
const a5 = soyfalse || soyUndefined || regresarTrue() || 'Ya no soy falso de nuevo' ;
console.log({a1,a2,a3,a4,a5});
console.table({a1,a2,a3,a4,a5});


