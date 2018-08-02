var title = document.createElement('h1');
var title2 = document.createElement('h2');
var div = document.querySelector('div');
var button1 = document.querySelector('button');
var counter = 1;

function click1() {
  var tempo = title.cloneNode(false);
  tempo.textContent = counter + ' ' + 'Title1';
  counter++;

  document.body.insertBefore(tempo, div);
}

function click2() {
  var tempo = title2.cloneNode(false);
  tempo.textContent = counter + ' ' + 'Title2';
  tempo.style.color = 'red';
  counter++;

  document.body.insertBefore(tempo, div);
}

button1.onclick = function() {
  click1();
}

function mouseOver1() {
  click2();
}

button1.addEventListener('mouseover', mouseOver1);




