const textarea = document.getElementById("textArea");
// console.log(textarea);

function setDataToLocalStorage() {
    localStorage.setItem("dataSaved", textarea.value);

}

if (localStorage.getItem("dataSaved")) {
    textarea.value = localStorage.getItem("dataSaved");
}

textarea.addEventListener("input", setDataToLocalStorage);

// Function to generate a random color
function generateRandomColor() {
    // Generate random values for red, green, and blue channels
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Construct a CSS color string
    var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    return randomColor;
}

// Function to change the background color of the button
function changeButtonColor() {
    var button = document.getElementById('colorButton');
    var randomColor = generateRandomColor();
    const container = document.getElementById("main");
    console.log(container);
    container.style.background = randomColor;
    button.style.background = randomColor;

}
// Add click event listener to the button
document.getElementById('colorButton').addEventListener('click', changeButtonColor);
