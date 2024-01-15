
//                 01234
let outraString = 'Teste'

console.log(outraString.indexOf('e', 3)) // Esse código faz eu procurar uma string específica em algum dos índices, e o 3 ao lado faz eu procurar logo DEPOIS do índice colocado ali, que no caso é o 3. O reultado é 4, pois há um "e" no índice 4. 

console.log(outraString.indexOf('t')) // Esse código faz eu procurar um certo caractere e o return será em qual índice ele está. O resultado: índice 3. 

console.log(outraString[3]) // Esse código mostra qual caractere está em determinado índice. Nesse exemplo, por exemplo, o índice que coloquei foi o 3, logo o resultado será o 't', pois é ele que está no índice 3.

console.log(outraString.lastIndexOf('e', 1)) // Esse código faz a mesma coisa que os acima, porém ele procura de forma contrária, ou seja, ele faz a leitura da String ao contrário. 