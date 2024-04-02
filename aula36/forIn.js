// Outro estilo de estrutura de repetição (for) pra utilizar nos códigos:

frutas = ['Banana', 'Maçã', 'Morango'];

for(let i in frutas){
    console.log(frutas[i]);
}

// Esse "for" conta os índices de um array ou objeto, por isso é mais simples.


pessoa = {nome: 'fred', idade: 19, altura: 1.79}

for(let i in pessoa){
    console.log(i, pessoa[i]);
}