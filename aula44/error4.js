function mostraData(data){
    if (data && !(data instanceof Date)){ // Mesma coisa do 'is in ' do python.
        throw new TypeError('Isso não é uma instância de date.');
    }

    if (!data) {
        data = new Date();
        let hora = data.getHours() // Só vai mostrar a unidade da hora e não a hora formatada corretamente.
        return hora
    }
}


let data = new Date();

try {
    console.log(mostraData());
} catch(e) {
    console.log('Deu erro!');
} finally {
    console.log('Finalizado.');
};
