// Exemplo 2 criando mais variáveis e criandos os parágrafos no próprio Javascript através de uma Div. 

const numero = Number(prompt('Digite um número'))
const texto = document.getElementById('texto')
const titulo = document.getElementById('idDoH1')

titulo.innerHTML = numero
texto.innerHTML = `<p>Raíz quadrada: ${numero ** 0.5}</p>`
texto.innerHTML += `<p>É inteiro? ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`
