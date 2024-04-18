let frases = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'p', texto: 'frase 4'}
];

const containerPai = document.querySelector(' .container');
const container = document.createElement('div');

containerPai.appendChild(container);

for(let i in frases){
    let {tag, texto} = frases[i];
    let tagNova = document.createElement(tag)
    tagNova.innerText = texto;
    container.appendChild(tagNova);
}