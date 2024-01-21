function listaPessoas(nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa1 = listaPessoas('Guilherme', 'Machado', 22)
const pessoa2 = listaPessoas('Alexandro', 'Fragoso', 48)
const pessoa3 = listaPessoas('Gabriela', 'Passos', 29)

console.log(pessoa3.idade)