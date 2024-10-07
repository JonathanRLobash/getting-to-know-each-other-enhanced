// Change color on name

//color for name change
const color = ['purple'];

//change color when clicked
function changeColor (event) {
    event.target.style.color = color[0];
}

//assign command to proper class
const clickableWords = document.querySelectorAll('.clickable');
clickableWords.forEach(word=> {
    word.addEventListener ('click', changeColor);
});