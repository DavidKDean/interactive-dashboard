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

    // Get the button
    const btn = document.getElementById("goal-btn");

    // Add EventListener to the button
    btn.addEventListener("click", function(event) {

        // Prevent form submission
        event.preventDefault();

        // Get values from the form
        let userName = document.getElementById("name").value;
        let dailyGoal = parseInt(document.getElementById("daily-goal").value);
        let bonusTasks = parseInt(document.getElementById("weekly-bonus").value);

        // Call the weeklyGoal function
        weeklyGoal(userName, dailyGoal, bonusTasks);
    });
});