// Store the Magic Eight Ball answers - Start
var answers = [
    "Yes, definitely!",
    "It is certain.",
    "Without a doubt.",
    "Ask again later.",
    "Cannot predict now.",
    "Do not count on it.",
    "My sources say no.",
    "Outlook looks good.",
    "Signs point to yes."
];
// Store the Magic Eight Ball answers - End


// Get the page elements - Start
var ball = document.getElementById("ball");
var questionInput = document.getElementById("question");
var circle = document.getElementById("circle");
var resetButton = document.getElementById("reset");
var addResponseButton = document.getElementById("add-response");
// Get the page elements - End


// Select and display a random answer - Start
function displayAnswer() {
    var index = Math.floor(Math.random() * answers.length);
    var answer = answers[index];

    circle.style.display = "flex";
    circle.innerHTML = answer;
}
// Select and display a random answer - End


// Check the question when the ball is pressed - Start
ball.addEventListener("mousedown", function () {
    var question = questionInput.value;

    if (question === "") {
        alert("Please enter a yes/no question.");
    } else {
        displayAnswer();
    }
});
// Check the question when the ball is pressed - End


// Hide the answer when the reset button is clicked - Start
resetButton.addEventListener("click", function () {
    circle.style.display = "none";
});
// Hide the answer when the reset button is clicked - End


// Add a response to the answers array - Start
addResponseButton.addEventListener("click", function () {
    var newResponse = prompt("Enter a new Magic Eight Ball response:");

    if (newResponse !== null && newResponse !== "") {
        answers.push(newResponse);

        console.log("New response added: " + newResponse);
        console.log("Number of responses: " + answers.length);
    }
});
// Add a response to the answers array - End