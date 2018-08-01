function randomNumber(min, max) {
  return min + Math.floor(Math.random() * (max + 1 - min));
}

const tableSize = 10;

let table = document.createElement('table');
let tbody = document.createElement('tbody');
let tr = document.createElement('tr');
let td = document.createElement('td');


for(let i = 0; i < tableSize; i++){
  let newTr = tr.cloneNode(true);
  for(let j = 0; j < tableSize; j++){
    let newTd = td.cloneNode(false);
    newTd.textContent = randomNumber(0, 99);
    newTr.appendChild(newTd);
  }

  tbody.appendChild(newTr);
}

table.appendChild(tbody);
document.body.appendChild(table);

const trList = document.querySelectorAll('tr');

for(let i = 0; i < tableSize; i++) {
  let cells = trList[i].children;

  if(!trList[i].previousElementSibling || !trList[i].nextElementSibling) {

    trList[i].className = 'perimeter';
  }
  else{
    trList[i].firstElementChild.className = 'perimeter';
    trList[i].lastElementChild.className  = 'perimeter';
  }

  if (i !== 0 && i !== tableSize - 1 ) {
    cells[tableSize -1 - i].className = 'diagonal';
    cells[i].className = 'diagonal';
  }
}

