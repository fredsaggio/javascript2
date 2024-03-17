data = new Date(2005, 2, 28, 15, 20, 20);
dataFormatada = formatandoData(data);

diaDaSemana = data.getDay();
escolherODia = diaAtualDaSemana(diaDaSemana);

function formatandoData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const horas = zeroAEsquerda(data.getHours());
    const minutes = zeroAEsquerda(data.getMinutes());
    const seconds = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${horas}:${minutes}:${seconds}`
}

function zeroAEsquerda(num) {
    return num >= 10? num : `0${num}`
}

function diaAtualDaSemana(dia) {
    
    switch (dia) {
        case 0:
            dia = 'Domingo';
            return dia;
        case 1: 
            dia = 'Segunda-feira';
            return dia;
        case 2: 
            dia = 'Terça-feira';
            return dia;
        case 3:
            dia = 'Quarta-feira';
            return dia;
        case 4:
            dia = 'Quinta-feira';
            return dia;
        case 5:
            dia = 'Sexta-feira';
            return dia;
        default:
            dia = 'Dia i dianválido';
            return dia;
    }
}

console.log(`Hoje é ${escolherODia}, ${dataFormatada}.`)
console.log(data.getMonth())