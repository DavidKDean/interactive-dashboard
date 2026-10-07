// Weekly Goal: Calculate the total weekly task goal for a user.

function weeklyGoal(userName, dailyGoal, bonusTasks) {

    // Output message to console
    console.log("Checking status for: " + userName);

    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = dailyGoal * 5;

    // Add bonusTasks to weeklyGoal
    let totalGoal = weeklyGoal + bonusTasks;

    // Output results to web page
    let output = "User: " + userName + "<br>" +
                 "Total Weekly Goal: " + totalGoal;

    document.getElementById("goal-message").innerHTML = output;
}


// Wait until the HTML page has loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get the weekly goal button
    const btn = document.getElementById("goal-btn");

    // Add EventListener to the weekly goal button
    btn.addEventListener("click", function(event) {

        // Prevent form submission
        event.preventDefault();

        // Get values from the form
        let userName = document.getElementById("user-name").value;
        let dailyGoal = parseInt(document.getElementById("daily-goal").value);
        let bonusTasks = parseInt(document.getElementById("bonus-tasks").value);

        // Call the weeklyGoal function
        weeklyGoal(userName, dailyGoal, bonusTasks);

    });


    // Array to store the user's tasks
    let myTasks = [];


    // Create the unordered list dynamically
    let userTasks = document.createElement("ul");

    // Give the unordered list a unique ID
    userTasks.id = "user-tasks";

    // Add the unordered list to the task-list div
    document.getElementById("task-list").appendChild(userTasks);


    // Get the Add Task button
    const addTask = document.getElementById("add-task");


    // Add EventListener to the Add Task button
    addTask.addEventListener("click", function(event) {

        // Prevent form submission
        event.preventDefault();

        // Get the task entered by the user
        let taskName = document.getElementById("task-name").value;

        // Make sure the user entered a task
        if (taskName.trim() !== "") {

            // Add the task to the array
            myTasks.push(taskName);

            // Create a new list item
            let listItem = document.createElement("li");

            // Add the task text to the list item
            listItem.innerHTML = taskName;

            // Add the list item to the unordered list
            userTasks.appendChild(listItem);

            // Clear the input field
            document.getElementById("task-name").value = "";

        }

    });

});