const display = document.getElementById('display');

// Adds numbers/operators to the screen
function appendToDisplay(input) {
    display.value += input;
}

// Clears everything
function clearDisplay() {
    display.value = "";
}

// Deletes the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// The math happens here
function calculate() {
    try {
        // eval() parses the string and does the math
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500); // Clear error after 1.5s
    }
}