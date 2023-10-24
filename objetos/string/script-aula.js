const comida = 'Pizza';
const agua = new String('agua');

console.log(comida.length);
console.log(agua.length);

console.log(comida[0]);
console.log(agua[0]);

const frase = 'A melhor comida';

console.log(frase[frase.length-1]);
console.log(frase.charAt(frase.length - 1))

const frase2 = 'A melhor linguagem é ';
const linguagem = 'JavaScript';
const fraseFinal = frase2.concat(linguagem, "!!");

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(fruta.includes(listaFrutas));
console.log(listaFrutas.includes(fruta));

console.log(fruta.startsWith('Ba')); //true
console.log(fruta.startsWith('ba')); //false
console.log(fruta.endsWith('nas')); //false
console.log(fruta.endsWith('na')); //true

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0,8));
console.log(transacao3.slice(8, -1))
console.log(transacao3.slice(-7))

console.log(fruta.indexOf('a'));
console.log(fruta.lastIndexOf('n'));

const listaPrecos = ['R$ 99,00', 'R$ 205,00', 'R$ 3900,00'];

listaPrecos.forEach((item) => {
    console.log(item.padStart(20, "."));
})
listaPrecos.forEach((item) => {
    console.log(item.padEnd(20, "."));
})

const frase3 = 'Ta';
console.log(frase3.repeat(5));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens);

listaItens = listaItens.replace('Camisas', 'Shirts');
console.log(listaItens)

const arrayLista = listaItens.split(', ');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';

const htmlArray = htmlText.split('div');
console.log(htmlArray)

const htmlNovo = htmlArray.join('section');
console.log(htmlNovo);

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino');


