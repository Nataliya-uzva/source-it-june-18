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
    newTd.dataset.line = i + '';
    newTd.dataset.column = j + '';

    // newTd.addEventListener('click', function(event) {
    //   if (!event && !event.target) {
    //     return;
    //   }
    //
    //   removeClass(table, 'i-am-active');
    //
    //   const elem = event.target;
    //   const line = +elem.dataset.line;
    //   const column = +elem.dataset.column;
    //
    //   if(elem.previousElementSibling) {
    //
    //     elem.previousElementSibling.classList.add('i-am-active');
    //   }
    //
    //   if(elem.nextElementSibling) {
    //
    //     elem.nextElementSibling.classList.add('i-am-active');
    //   }
    //
    //   if (line === 0) {
    //     table.rows[line + 1].cells[column].classList.add('i-am-active');
    //     return;
    //   }
    //
    //   if (line === tableSize - 1) {
    //     table.rows[line - 1].cells[column].classList.add('i-am-active');
    //     return;
    //   }
    //
    //   table.rows[line + 1].cells[column].classList.add('i-am-active');
    //   table.rows[line - 1].cells[column].classList.add('i-am-active');
    //
    // });
    newTr.appendChild(newTd);
  }

  tbody.appendChild(newTr);
}

function removeClass(table, className) {
  const tableSize = table.rows.length;
  const tableSizeColumn = table.rows[0].cells.length;
  for (var i = 0; i < tableSize; i++) {
    for (var j = 0; j < tableSizeColumn; j++) {
      table.rows[i].cells[j].classList.remove(className);
    }
  }
}

table.appendChild(tbody);

table.addEventListener('click', function(event) {
  if (!event || !event.target || event.target.tagName !== 'TD') {
    return;
  }

  removeClass(table, 'i-am-active');

  const elem = event.target;
  const line = +elem.dataset.line;
  const column = +elem.dataset.column;

  if(elem.previousElementSibling) {

    elem.previousElementSibling.classList.add('i-am-active');
  }

  if(elem.nextElementSibling) {

    elem.nextElementSibling.classList.add('i-am-active');
  }

  if (line === 0) {
    table.rows[line + 1].cells[column].classList.add('i-am-active');
    return;
  }

  if (line === tableSize - 1) {
    table.rows[line - 1].cells[column].classList.add('i-am-active');
    return;
  }

  table.rows[line + 1].cells[column].classList.add('i-am-active');
  table.rows[line - 1].cells[column].classList.add('i-am-active');
});

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

// const div = document.querySelector('div');
// div.textContent = div.dataset.title;
// div.dataset.text = 'text';
// // alert(div.dataset.text);
//
// function clickMe(event) {
//
//   console.dir(event);
//
// }
