const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement('div');
    div.className = 'square';
    container.appendChild(div);
  }
}
const buttons = document.createElement('div');
buttons.className = 'buttons';

const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.style.backgroundColor = 'white';
  });
});

const sizeBtn = document.createElement('button');
sizeBtn.textContent = 'Change Size';

sizeBtn.addEventListener('click', (e) => {
  const size = parseInt(prompt('Enter the number of squares per side'), 10);
  if (typeof size === 'number' && size > 0 && size <= 100) {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      square.remove();
    });
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const div = document.createElement('div');
        div.className = 'square';
        div.style.width = `${960 / size}px`;
        div.style.height = `${960 / size}px`;
        div.addEventListener('mouseover', () => {
          div.style.backgroundColor = `#${Math.floor(
            Math.random() * 16777215
          ).toString(16)}`;
        });
        container.appendChild(div);
      }
    }
    squares.forEach((square) => {
      square.style.backgroundColor = '';
    });
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

buttons.appendChild(resetBtn);
buttons.appendChild(sizeBtn);
const title = document.querySelector('h1');
title.appendChild(buttons);
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  });
});
