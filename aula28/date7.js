function zeroAtras(num){ // Esse num é apenas o parâmetro.

    return num >= 10? num : `0${num}` // Se o número for menor que 10, o 0 será adicionado. 
}

function formataData(data){

    const dia = zeroAtras(data.getDate());
    const mes = zeroAtras(data.getMonth() + 1); // Adicionado +1 por conta do mês começar com 0. 
    const ano = zeroAtras(data.getFullYear());
    const hora = zeroAtras(data.getHours());
    const min = zeroAtras(data.getMinutes());
    const seg = zeroAtras(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`

}

data = new Date(2021, 3, 7); // Exemplo de data.
dataBrasil = formataData(data);

console.log(dataBrasil)