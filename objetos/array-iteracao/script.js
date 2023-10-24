// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');

const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('.aulas');
    const horas = curso.querySelector('.horas');
    return {
        aula: titulo,
        descricao: descricao,
        aulas: aulas,
        horas: horas
    }
}) 
console.log(objetosCurso)
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiores100 = numeros.filter((numero) => {
    return numero > 100;
})

console.log(maiores100);



// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const buscaBaixo = instrumentos.find((instrumento) => {
    return instrumento == 'Baixo';
})

console.log(buscaBaixo)


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let total = 0;
comprasTotal = compras.forEach((compra) => {
    let precoLimpo = compra.preco.slice(2);
    precoLimpo = parseFloat(precoLimpo);
    total += precoLimpo
});

console.log(total)