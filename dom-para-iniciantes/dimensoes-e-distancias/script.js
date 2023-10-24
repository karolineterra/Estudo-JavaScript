//height e width
const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.scrollHeight;
console.log(height);

// offsetTop e offsetLeft
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);
const animaisEsq = listaAnimais.offsetLeft;
console.log(animaisEsq);

//getBoundingClientReact()

const primeiroh2 = document.querySelector('h2');

const react = primeiroh2.getBoundingClientRect();

console.log(react);
console.log(react.width);
console.log(react.height)
console.log(react.top);
console.log(react.bottom);
console.log(react.left);
console.log(react.right);
console.log(react.x);
console.log(react.y);

if(react.top < 0){
    console.log('Passou do elemento');
}
//window
console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset, //deprecated
    window.pageXOffset //deprecated
)

const small = window.matchMedia('(max-width: 600px)').matches;

if(small){
    console.log('usuario mobile');
} else{
    console.log('usuario desktop')
}

//EXERCÍCIO 

// Verifique a distância da primeira imagem
// em relação ao topo da página

primeiraimg = document.querySelector('img');
console.log(primeiraimg.offsetTop)

// Retorne a soma da largura de todas as imagens


function somaImagens(){
        const todasImg = document.querySelectorAll('img');
        console.log(todasImg);

        let tamanho = 0;
        todasImg.forEach((imagem) => {
            tamanho += imagem.offsetWidth;
        });
        console.log(`A soma do tamanho de todas as imagens é ${tamanho}`)
}
window.onload = function(){
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
console.log(links)
links.forEach((item) => {
    const height = item.offsetHeight;
    const width = item.offsetWidth;
    if((height >= 48) && (width >= 48)){
        console.log("O tamanho do link é apropriado");
    } else {
        console.log("O tamanho não é apropriado!")
    }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const tamanhoBrowser = window.matchMedia('(max-width: 720px)').matches;

if(tamanhoBrowser){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}
