//EXERCÍCIO

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event){
    event.preventDefault();
    linksInternos.forEach((link) =>{
        link.classList.remove('ativo');
    });

    this.classList.add('ativo'); //Pode ser também event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) =>{
    link.addEventListener('click', handleLink);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');


todosElementos.forEach((item) =>{
    item.addEventListener('click', handleItem);
});


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleItem(event){
    event.currentTarget.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('textoMaior');
    }
}

window.addEventListener('keydown', handleClickT)