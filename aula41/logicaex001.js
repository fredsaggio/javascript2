function maiorNumero(n1, n2) {
    if (n1 > n2) {
        return `O ${n1} é o maior número.`
    } else if (n2 > n1) {
        return `O ${n2} é o maior número.`
    } else {
        return 'Os dois números são iguais'
    }
}

function numeroGrandao(n1, n2) {
    return `O maior número é o ${Math.max(n1, n2)}`
}

console.log(numeroGrandao(2, 2))
console.log(maiorNumero(2, 4))