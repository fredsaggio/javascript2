const nomePessoa = 'Frederico Santos Saggio'
const idade = 18 
const altura = 1.8
const peso = 63.9
const indiceMassaCorporal= peso / (altura ** 2)
const data = new Date()
const anoAtual = data.getFullYear()
const anoNascimento = anoAtual - idade

console.log(`${nomePessoa} tem ${idade} anos, pesa ${peso} kg, tem ${altura.toFixed(2)} de altura e o seu imc é de ${indiceMassaCorporal.toFixed(2)}`) /* Utilizei template Strings. */

console.log(`${nomePessoa} nasceu em ${anoNascimento}`)

if (indiceMassaCorporal < 18.5) {
    console.log('Você está abaixo do peso.')
} else {
    console.log('Você está com o peso normal.')
}


/* console.log(nomePessoa, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura.toFixed(2), 'de altura e o seu imc é de', imc) */