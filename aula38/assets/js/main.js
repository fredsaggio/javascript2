const teste = document.querySelector('.paragrafos');
const ps = teste.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
backgroundColorBody = estilosBody.backgroundColor;

for(let p in ps){
    console.log(ps[p]);
    ps[p].style.backgroundColor = backgroundColorBody;
    ps[p].style.color = 'white'
}