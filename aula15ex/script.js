const numero = Number(prompt('Digite um número'))

document.getElementById('idDoH1').innerHTML = numero

document.getElementById('idDoP1').innerHTML = numero ** 0.5

document.getElementById('idDoP2').innerHTML = numero

document.getElementById('segundoIdDoP2').innerHTML = Number.isInteger(numero)

document.getElementById('idDoP3').innerHTML = Number.isNaN(numero)

document.getElementById('idDoP4').innerHTML = Math.floor(numero)

document.getElementById('idDoP5').innerHTML = Math.ceil(numero)

document.getElementById('idDoP6').innerHTML = numero.toFixed(2)