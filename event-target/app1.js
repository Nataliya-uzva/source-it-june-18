var form = document.querySelector('form');

form.onclick = function(event) {
  event.target.style.background = 'blue';

  console.log("target = " + event.target.tagName + ", this=" + this.tagName);

  setTimeout(function() {
    event.target.style.backgroundColor = '';
  }, 1000);

};

function click1(event) {
  console.log('p');

  event.stopPropagation();
}



