
function saludar(nombre){
    console.log(arguments);
    console.log('Hola '+nombre);
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
saludar('Juan','edad');
saludar2('pedro');
saludarFlecha2('melisa');
saludarFlecha();