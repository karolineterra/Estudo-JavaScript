// getElementById
const animais = document.getElementById('animais');
console.log(animais.innerText) /*retorna todo o texto presente na section de ID animais*/

/*Retorna null quando selecionar algo que não existe */

// getElementByClassName e getElementsByTagName
/*Ambos selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, o que significa que se elementos forem adicionados, ela será automaticamente atualizada */

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection) //Retorna uma HTML collection

// querySelector 
/*Retorna o primeiro elemento que combinar com o seu seletor CSS*/

const animais2 = document.querySelector('.animais') //selecionando por class

contato = document.querySelector('#contato'); //Selecionando por id

ultimoItem = document.querySelector('.animais-lista li:last-child') //Selecionando o último item de uma lista dentro de uma classe

const linkCSS = document.querySelector('[href^="https://"]'); //Seleciona o primeiro link do site, sendo ele o css

console.log(linkCSS)

const primeiroUl = document.querySelector('ul');

const navItem = primeiroUl.querySelector('li'); //Seleciona o primeiro li dentro do primeiro ul

const linkInterno = document.querySelector('[href^="#"') //Retorna o primeiro link interno

console.log(linkInterno.href) //retorna o caminho do primeiro link interno

//querySelectorAll
/** Retorna todos os elementos compatíveis com o seletor CSS em uma NodeList */

const gridSection1 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

//retorna o segundo elemento

console.log(gridSection[1]);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

//HTMLCollection vs NodeList

/**A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática */

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); //4 itens
console.log(gridSectionNode); //3 itens

//Array-Like
/**HTML Collection e NodeList são array-like, parecem uma array, mas não são. O método de Array forEach(), por exemplo, existe apenas em NodeList. */

const gridSection2 = document.querySelectorAll('.grid-section');

gridSection2.forEach(function(gridItem, index, array){
    gridItem.classList.add('azul');
    console.log(index); //index do item no array
    console.log(array) //a array completa 
})

/**É possível transformar um array like em um Array real, utilizando o método Array.from(gridSection) */


//EXERCÍCIOS

// Retorne no console todas as imagens do site

todasImagens = document.querySelectorAll('img')
console.log(todasImagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
imagensImagem = document.querySelectorAll('[src^="img/imagem"]')
console.log(imagensImagem)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"')
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('.animais-descricao h2');

console.log(primeiroUl)

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1].innerText)


