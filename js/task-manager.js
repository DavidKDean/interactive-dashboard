// Weekly Goal: Calculate the total weekly task goal for a user.

function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = dailyGoal * 5;

    // Add bonusTasks to weeklyGoal
    let totalGoal = weeklyGoal + bonusTasks;

    // Output results to the web page
    let output = "User: " + userName + "<br>";
    output += "Total Weekly Goal: " + totalGoal;

    document.getElementById("goal-message").innerHTML = output;
}

// Handle the goal button click
document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();

    // Get values from the form
    let userName = document.getElementById("name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("weekly-bonus").value);

    // Calculate and display the weekly goal
    weeklyGoal(userName, dailyGoal, bonusTasks);
});