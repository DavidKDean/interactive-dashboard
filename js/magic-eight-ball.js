// Array containing possible Magic Eight Ball answers
let answers = [
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

// Function to randomly select and display an answer
function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    let answer = answers[index];

    let circle = document.getElementById("circle");

    circle.style.display = "flex";
    circle.innerHTML = answer;
}

// Get the Magic Eight Ball image
let ball = document.getElementById("ball");

// Run when the user presses the ball
ball.addEventListener("mousedown", function() {
    let question = document.getElementById("question").value;

    if (question === "") {
        alert("Please enter a yes/no question.");
    } else {
        displayAnswer();
    }
});

// Get the reset button
let reset = document.getElementById("reset");

// Hide the answer when the reset button is clicked
reset.addEventListener("click", function() {
    document.getElementById("circle").style.display = "none";
});

// Get the Add New Response button
let addResponse = document.getElementById("add-response");

// Add a new response to the answers array
addResponse.addEventListener("click", function() {
    let newResponse = prompt("Enter a new Magic Eight Ball response:");

    if (newResponse !== null && newResponse !== "") {
        answers.push(newResponse);

        console.log("New response added: " + newResponse);
        console.log("Number of responses: " + answers.length);
    }
});