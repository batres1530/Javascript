const heroes = ['Batman','Superman','Mujer Maravilla', 'Aquaman'];

console.warn('Ciclo For');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('Ciclo For in');
 
for (let i in heroes) {
    console.log(heroes[i]);
} // el for in itera sobre los propiedades de un objeto

console.warn('Ciclo For of');

for(let heroe of heroes){
    console.log(heroe);
} // el for of itera sobre los elementos de un array
