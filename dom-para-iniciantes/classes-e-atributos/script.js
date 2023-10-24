// const menu = document.querySelector('.menu'); 
// console.log(menu.classList); //Retorna as classes

// menu.classList.add('grande'); //Adiciona uma classe

// menu.classList.remove('azul'); //Remove uma classe

// menu.classList.toggle('azul'); //Adiciona e remove classe

// if(menu.classList.contains('azul')){ //retorna um boolean que indica se existe ou não a classe
//     menu.classList.add('ativo', 'teste');
//     console.log(menu.classList)
// };

// console.log(menu.className) //retorna uma string com o nome das classes
// menu.className = "testar"; 
// menu.className += " verde"

// console.log(menu.className)


// //ATTRIBUTES

// const animais = document.querySelector('.animais');
// console.log(animais.attributes[0]);//retorna o primeiro atributo
// console.log(animais.attributes[1]); //retorna o segundo atributo
// console.log(animais.attributes['data-texto']);


// //GET E SET

// const img = document.querySelector('img');
// console.log(img.getAttribute('src')) //pode retornar alt também se houver ou qualquer outro atributo
// console.log(img.setAttribute('alt', 'é uma raposa'));

// // Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll(".menu ul li")
console.log(itensMenu)
itensMenu.forEach((itens) =>{
    itens.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((itens, index) =>{
    if (index != 0){
        itens.classList.remove('ativo');
    }
}
)

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')

imagens.forEach((itens, index) =>{
    if (itens.getAttribute('alt') == null){
        console.log(`A imagem ${index} não possui atributo alt`)
    } else {
        atributo = itens.getAttribute('alt')
        console.log(`A imagem ${index} tem o atributo ${atributo}`)
    }
})
// Modifique o href do link externo no menu

linkExterno = document.querySelector('[href="https://www.origamid.com');
linkExterno.setAttribute('href', 'https://google.com.br');