const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = teste(diaSemana);

function teste(diaDaSemana) {

    let diaSemanaTexto;

    switch (diaDaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1: 
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2: 
            diaSemanaTexto = 'Terça-feira';SemanaTexto
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Dia i dianválido';
            return diaSemanaTexto;
    }
}

console.log(`${diaSemana} e ${diaSemanaTexto}`)