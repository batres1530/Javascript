const  carro = ['Ford', 'mazda', 'honda', 'toyota'];
console.warn(' While');
let i = 0;

// while (i < carro.length) {
//     console.log(carro[i]);
//     i++;
// }

while (carro[i]) {
    if (i === 1 ) {
        // break;
        i++;
        continue;
    }
    console.log(carro[i]);
    i++;
}

console.warn('Do While');
let j=10;

do {
    Console.log(carro[j]);
    j++;
} while(carro[j]);