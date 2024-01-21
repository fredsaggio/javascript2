let a = [1, 2, 3]

let b = a

console.log(a, b)

a.push(5)

console.log(a, b) // O "b" também ganhou o push pois o valor está indo para o mesmo espaço na memória da variável "a".