function mostraData(data){
    if (data && !(data instanceof Date)){ // Mesma coisa do 'is in ' do python.
        throw new TypeError('Isso não é uma instância de date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: true, // Pra ter o hora em formato Brasileiro 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'

    })
}

let data = new Date('03-01-1988 14:51:23');

try {
    console.log(mostraData());
} catch(e) {
    console.log('Deu erro!');
} finally {
    console.log('Finalizado.');
};
