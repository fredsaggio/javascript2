function relogio(){

let timer = document.querySelector('#timer')
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

// addEventListener no 'document', mais fácil caso haja muitos botões pois terá apenas um 'addEventListener' e não 1 para cada botão.
document.addEventListener('click', function(e) {

    const elemento = e.target; //  // 'target' neste código é qualquer lugar que nós clicarmos.

    if (elemento.classList.contains('botao1')) {
        clearInterval(timerInicio); // Tem que dar 'clearInterval' até antes de iniciar para que não haja problema.
        iniciarRelogio();
    }

    if (elemento.classList.contains('botao2')) { // cada if verifica se o 'target' que estamos clicando são os
                                                 // botões selecionados, isso tudo utilizando as classes dadas.   
        clearInterval(timerInicio);
        timer.style.color = 'red';
    }

    if (elemento.classList.contains('botao3')) {
        clearInterval(timerInicio);
        timer.style.color = 'black'
        timer.innerHTML = '00:00:00'
        seconds = 0
    }
})
}

relogio();