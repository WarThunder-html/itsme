let answer;

document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('calculate');
    button.addEventListener('click', function() {
        let number = parseFloat(prompt("Enter a number to square:"));
        if (isNaN(number)) {
            document.getElementById('result').textContent = "Please enter a valid number.";
            return;
        }
        answer = number * number;
        document.getElementById('result').textContent = "The square of " + number + " is " + answer;
    });
});