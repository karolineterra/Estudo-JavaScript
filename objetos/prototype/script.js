// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
    return (this.nome + " " + this.sobrenome);
}
Pessoa.prototype.perfilUsuario = function(){
    return (`Esta é ${this.nome} ${this.sobrenome}, ela tem ${this.idade} anos de idade`);
}

const karol = new Pessoa('Karol', 'Terra', 22);

console.log(karol.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
console.log(li.constructor) //HTMLLIElement()
console.log(li.click.constructor); //Function()
console.log(li.innerText.constructor); //String()
console.log(li.value.constructor); //Number()
console.log(li.hidden.constructor); //Boolean()
console.log(li.offsetLeft.constructor); //Number()
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String()
