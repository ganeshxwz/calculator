let p1El = document.getElementById("p1-el");
let p2El = document.getElementById("p2-el");
let preel = document.getElementById("pre-el");


let count = 0;
function inc() {
  count += 1;
  p1El.textContent = count;
}


let count2 = 0;
function inc2() {
  count2 += 1;
  p2El.textContent = count2;
}

function add() {
  let sum = count + count2;
  preel.textContent += sum;
}

function minus() {
  let sum = count - count2;
  preel.textContent += sum;
}

function multi() {
  let sum = count * count2;
  preel.textContent += sum;
}

function div() {
  let sum = count / count2;
  preel.textContent += sum;
}

function reset() {
  count = 0;
  count2 = 0;
  preel.innerText = 0;
  p1El.innerText = count;
  p2El.innerText = count2;
}

