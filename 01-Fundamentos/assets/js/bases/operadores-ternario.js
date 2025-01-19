const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
// if ([0,6].includes(dia)) {
//     console.log('es fin de semana');
//     horaApertura = 9;
// }
// else {
//     console.log(' es dia de  semana');
//     horaApertura = 11;
// }

horaApertura = (dia === 0 || dia === 6) ? 9 : 11;

// if  (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// }
// else {
//     mensaje = `Esta cerrado, abrimoa a la hora ${horaApertura} ` ;
// }
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : 'Esta cerrado, abrimoa a la hora '+horaApertura;

console.log({horaApertura, mensaje});