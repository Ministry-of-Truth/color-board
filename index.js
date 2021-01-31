let colorables = document.querySelectorAll('.colorable');
let currentColor = '';
let pickers = document.querySelectorAll('.picker');
let header = document.querySelector('.header');
let resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
    for (colorable of colorables) {
        colorable.style.background = 'white';
    }
})

pickers[0].addEventListener('click', () => {
    currentColor = 'red';
    header.style.background = 'linear-gradient(45deg, red, brown)';
})

pickers[1].addEventListener('click', () => {
    currentColor = 'yellow';
    header.style.background = 'linear-gradient(45deg, yellow, burlywood)';
})

pickers[2].addEventListener('click', () => {
    currentColor = 'blue';
    header.style.background = 'linear-gradient(45deg, blue, cadetblue)';
})

pickers[3].addEventListener('click', () => {
    currentColor = 'green';
    header.style.background = 'linear-gradient(45deg, green, darkolivegreen)';
})

console.log(pickers[0].style);

function colorTheSquare(e) {
    e.preventDefault();
    e.target.style.background = currentColor;
}

for (let i = 0; i < colorables.length; i++) {
    colorables[i].id = `colorable-${i}`;
    colorables[i].addEventListener('click', colorTheSquare)
}
