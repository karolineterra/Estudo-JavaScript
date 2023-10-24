const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
primeiraComida = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
ultimaComida = comidas.pop();
// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'batata');

console.log(primeiraComida, ultimaComida, comidas);


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort()
console.log(estudantes)
// Inverta a ordem dos estudantes
estudantes.reverse()
console.log(estudantes)
// Verifique se Joana faz parte dos estudantes
console.log("Joana está inclusa? " + estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log("Juliana está inclusa? " + estudantes.includes('Juliana'));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li');
console.log(html);
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

const carros = new Array('Ford', 'Fiat', 'Honda');
carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[20] = 'Kim'
console.log(carros)

const li = document.querySelectorAll('li');

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosOriginal = carros.slice();
carros.pop();
console.log(carrosOriginal, carros);
const arrayLi = Array.from(li);
console.log(arrayLi)