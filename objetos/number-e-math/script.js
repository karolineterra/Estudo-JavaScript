// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(aleatorio)


// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
numeros = numeros.split(', ');
maior = 0;
numeros.forEach(numero => {
    let numeroLimpo = parseInt(numero);

    if (numeroLimpo > maior){
        maior = numeroLimpo;
    }
});

console.log(maior);

//ou:

console.log(Math.max(4, 5, 20, 8, 9));

//ou:

const numeroMaximo = Math.max(...numeros);

console.log(`O maior numero é ${numeroMaximo}`);




// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
let palavra = 'olá';
palavra.toUpperCase()
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let total = 0;
function Limpar(lista){
    lista.forEach((item) => {
        let itemLimpo = + item.toUpperCase().replace('R$ ', '').trim().replace(',', '.');
        itemLimpo = +itemLimpo.toFixed(2);
        total += itemLimpo;
        console.log(itemLimpo)
    });
    console.log(total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
}

Limpar(listaPrecos);