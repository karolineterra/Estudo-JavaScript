console.log(Number.isNaN(NaN));
console.log(Number.isNaN(4));
console.log(Number.isNaN('ali'));

console.log(Number.isInteger(10));
console.log(Number.isInteger(2.1));

const aleatorio = Math.floor(Math.random() * 10);

console.log(aleatorio);

//numero aleatório entre um e outro

const numero = Math.floor(Math.random() * (72 - 32 + 1)) + 32;
console.log(numero);

//Math.floor(Math.random() * (max - min + 1)) + min; 