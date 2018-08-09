const options = [
    'каждый',
    'охотник',
    'желает',
    'знать',
    'где',
    'сидит',
    'фазан'
];

const customField = document.createElement('div');
const selectionWrap = document.createElement('div');
const select = document.createElement('ul');
const option = document.createElement('li');

const imgWrap = document.createElement('div');
imgWrap.classList.add('img-wrap');


const currentImage = document.createElement('img');
currentImage.setAttribute('src', `images/${0}.jpg`);

imgWrap.appendChild(currentImage);


options.forEach(function(value, ind) {
    let newLi = option.cloneNode(false);
    newLi.textContent = value;
    newLi.dataset.value = ind + '';

    select.appendChild(newLi);
});

customField.textContent = options[0];
customField.classList.add('button');
select.style.display = 'none';

selectionWrap.appendChild(customField);
selectionWrap.appendChild(select);
selectionWrap.classList.add('select-wrap');

document.body.appendChild(imgWrap);
document.body.appendChild(selectionWrap);

selectionWrap.addEventListener('click', function (event) {
    if (!event || !event.target || (event.target.tagName !== 'LI' && event.target !== customField)) {
        return;
    }

    const target = event.target;

    if (target === customField) {
        select.style.display = '';
    } else {
        select.style.display = 'none';
        customField.textContent = target.textContent;
        currentImage.setAttribute('src', `images/${target.dataset.value}.jpg`);
    }
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('.select-wrap')) {
        select.style.display = 'none';
    }
});
















// const imgBlock = document.createElement('img');
// const imgWrap = document.createElement('div');
// const customSelect = document.createElement('div');
// const customField = document.createElement('div');
// const customOptions = document.createElement('ul');
// const customOption = document.createElement('li');
//
// /**  Create custom select */
//
// customField.classList.add('button');
// customField.textContent = options[0];
//
// options.forEach((text, index) => {
//
//     let newOption = createDOMElement(customOption, text);
//     newOption.dataset.value = index + '';
//     customOptions.appendChild(newOption);
// });
//
// imgBlock.setAttribute('src', `images/${0}.jpg`);
// imgWrap.classList.add('img-wrap');
// imgWrap.appendChild(imgBlock);
//
// customOptions.style.display = 'none';
//
// customSelect.appendChild(customField);
// customSelect.appendChild(customOptions);
//
// customSelect.classList.add('select-wrap');
//
// document.body.appendChild(imgWrap);
// document.body.appendChild(customSelect);
//
// function createDOMElement(elem, text) {
//     let newElem = elem.cloneNode(false);
//     newElem.textContent = text;
//     return newElem;
// }
//
// customField.addEventListener('click', function () {
//     if ( customOptions.style.display !== 'none' ) {
//         customOptions.style.display = 'none';
//     }
//     else {
//         customOptions.style.display = '';
//     }
// });
//
// document.addEventListener('click', function (event) {
//     const target = event.target;
//
//     if (!target.closest('.select-wrap')) {
//         customOptions.style.display = 'none';
//     }
//     else {
//         customField.textContent = target.textContent;
//
//         if (target.dataset.value) {
//             imgBlock.setAttribute('src', `images/${target.dataset.value}.jpg`);
//         }
//     }
// });