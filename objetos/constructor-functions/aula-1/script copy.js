// const Dom = {
//     seletor: 'li',
//     elemento(){
//         return document.querySelector(this.seletor);
//     },
//     ativar(){
//         this.elemento().classList.add('ativar');
//     }
// }

function Dom(seletor) {
    this.elemento = function(){
        return document.querySelector(seletor);
    },
    this.ativar = function(){
        this.elemento().classList.add('ativar');
    }
}

const li = new Dom('li');
const ul = new Dom('ul');
const lasLi = new Dom('li:last-child');