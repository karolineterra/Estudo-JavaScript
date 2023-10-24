function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function(){
    return this.nome +' andou';
}

Pessoa.prototype.nadar = function(){
    return this.nome +' nadou';
}
const andre = new Pessoa('andré', 28);
console.log(Pessoa.prototype);
console.log(andre.prototype);

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const listaLi = document.querySelectorAll('li')

const listaArray = Array.prototype.slice.call(listaLi);
console.log(listaLi);
console.log(listaArray);