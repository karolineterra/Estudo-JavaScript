const li = document.querySelectorAll('li');

const retornoForeach = li.forEach((item, index) => {
  item.classList.add('ativa' + index);
});


console.log(retornoForeach)

carros = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros.map((item, index, array) =>{
  return item.toUpperCase();
})

const numeros = [2, 3, 4, 5, 6, 78];

const numerosX2 = numeros.map(n => n*2);
console.log(numerosX2)
console.log(novaArray)