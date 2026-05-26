let menu = document.getElementById("menu");
let select = document.getElementById("numCards");
let start = document.getElementById("start");


let nivel = 1;

for (let i = 4; i <=10 ; i+=2){

    let n = i*i;

    let op = document.createElement("option");
    op.value = n;

    op.textContent = `Nível ${nivel} - ${n} cartas`
    select.appendChild(op);

    nivel++;
}