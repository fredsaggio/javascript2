function dataHora(){ 
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', { // function pra mostrar a hora.
        hora12: false
    });
};

const timer = setInterval(function (){ 
    console.log(dataHora());
}, 1000);

setTimeout(function (){ // Seta o tempo limite para parar o 'time'.
    clearInterval(timer) // Para o código 
}, 10000)