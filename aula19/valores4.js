let a = [1, 2, 3]

let b = [... a] // Colocando esses 3 pontos, agora o "b" não aponta mais para o mesmo lugar da memória que o "a" e sim só fez uma cópia do Array.

console.log(a, b)

a.push(8)

console.log(a, b)