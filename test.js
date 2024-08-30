let Numeros = [11, 13, 2, 7]

let target = 9
let soma = 0


for(let i in Numeros) {
    for (let j = i + 1; j < Numeros.length; j++) {
        if (Numeros[i] + Numeros[j] === 9){
            soma += Numeros[i] + Numeros[j]
            break
        }
    }
}

console.log(soma)