var ul = document.createElement('ul');

for (var i = 0; i < 10; i++) {
  var li = document.createElement('li');
  li.textContent = i + ' элемент';

  li.onclick = function(x) {

    return function() {
      console.log('это элемент номер ' + x);
    }

  }(i);

  ul.appendChild(li);
}

document.body.appendChild(ul);




