let timer = document.querySelector('#timer')
const iniciar = document.querySelector('#botao1')
const pausar = document.querySelector('#botao2')
const zerar = document.querySelector('#botao3')
let seconds = 0
let timerInicio;


function dataHora(seconds){
    let data = new Date(seconds * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hora12: false,
        timeZone: 'GMT'
    })
}

function iniciarRelogio() {
    timerInicio = setInterval(function() {
        seconds++;
        timer.innerHTML = dataHora(seconds);
    }, 1000)
    timer.style.color = 'black'
}

iniciar.addEventListener('click', function(e) {
    clearInterval(timerInicio)
    iniciarRelogio();
})

pausar.addEventListener('click', function(e) {
    clearInterval(timerInicio);
    timer.style.color = 'red';
})

zerar.addEventListener('click', function(e) {
    clearInterval(timerInicio);
    timer.style.color = 'black'
    timer.innerHTML = '00:00:00'
    seconds = 0

})


