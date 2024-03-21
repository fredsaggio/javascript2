// Atribuição por desestruturação:

pessoa = {nome: 'Fred', idade: '18', altura: '1.79', peso: {começo: '61kg', depois: '72kg'}};

const {nome: n, idade, altura, peso: {começo, depois}} = pessoa;

console.log(n, idade, altura, depois);