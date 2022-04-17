document.addEventListener('DOMContentLoaded', main);

let i = 0

function main(){
    console.log(document.getElementById('loremszoveg'));

    let div = document.getElementById('loremszoveg');

    let body = document.getElementsByTagName('body')[0];

    console.log(body);

    let button = document.createElement('button');
    body.appendChild(button);
    button.innerHTML='Gomb'+(++i);
    button.addEventListener('click', szuletes);


}


function szuletes(){
    let body = document.getElementsByTagName('body')[0];
   

    for (let j = 0; j < 69; j++) {
        let button1 = document.createElement('button');
        body.appendChild(button1);
        button1.innerHTML='Gomb'+(++i);
        button1.addEventListener('click', szuletes);
    }
}