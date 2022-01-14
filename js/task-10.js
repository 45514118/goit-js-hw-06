function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.querySelector('#boxes');
const inputNumber = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);
let x = 20;
function createBoxes() {
  const divs = [];
  let amount = inputNumber.value;
  for (let i = 0; i < amount; i += 1) {
    x += 10;
    const item = document.createElement('div');
    item.style.height = `${x}px`;
    item.style.width = `${x}px`;
    item.style.backgroundColor = getRandomHexColor();
    divs.push(item);
  }
  boxes.append(...divs);
}
function destroyBoxes() {
  boxes.innerHTML = '';
  x = 20;
}
