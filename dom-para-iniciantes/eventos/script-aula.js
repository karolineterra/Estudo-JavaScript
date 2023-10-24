//Callback e event
const img = document.querySelector('img');
function callback(event){
    console.log('clicou');
    console.log(event);
}

img.addEventListener('click', callback)

//propriedades do event
const animaisLista = document.querySelector('.animais-lista');
function callbackLista(event){
    console.log(event.currentTarget); //retorna o elemento em que o evento foi acionado
    console.log(this);//retorna o mesmo que o currentTarget
    console.log(event.target); //retorna exatamente o ponto que foi selecionado
}

animaisLista.addEventListener('click', callbackLista);


//event.preventDefault

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
    event.preventDefault();
    console.log('Clicou');
}
linkExterno.addEventListener('click', handleLinkExterno);

//Diferentes eventos

const h1 = document.querySelector('h1');

function handleEvent(event){
    console.log(event.type, event);
}
h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
h1.addEventListener('mousemove', handleEvent);

window.addEventListener('scroll', callback);
window.addEventListener('resize', handleEvent);
window.addEventListener('keydown', handleEvent);


const imgs = document.querySelectorAll('img');

function handleImg(event){
    console.log(event.target.getAttribute('src'));
}
imgs.forEach((img) =>{
    img.addEventListener('click', handleImg);
});

//EXERCÍCIO

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
