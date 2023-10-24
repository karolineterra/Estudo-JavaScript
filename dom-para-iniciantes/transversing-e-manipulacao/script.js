// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const clonemenu = menu.cloneNode(true);
copy.appendChild(clonemenu);

// Selecione o primeiro DT da dl de Faq
const dl = document.querySelector('dl');
console.log(dl.children[0])
// Selecione o DD referente ao primeiro DT
console.log(dl.children[0].nextElementSibling);
// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;

