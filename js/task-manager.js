// Store the tasks in an array of objects - Start
var tasks = [];
var nextTaskId = 1;
// Store the tasks in an array of objects - End


// Get the page elements - Start
var goalBtn = document.getElementById("goal-btn");
var goalMessage = document.getElementById("goal-message");

var addTaskButton = document.getElementById("add-task");
var taskNameInput = document.getElementById("task-name");
var taskPriorityInput = document.getElementById("task-priority");
var taskImportantInput = document.getElementById("task-important");
var taskItems = document.getElementById("task-items");
var deleteListButton = document.getElementById("delete-list");
// Get the page elements - End


// Calculate the total weekly task goal for a user - Start
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    console.log("Checking status for: " + userName);

    var weeklyGoalTotal = dailyGoal * 5;
    var totalGoal = weeklyGoalTotal + bonusTasks;

    var output = "User: " + userName + "<br>" +
        "Total Weekly Goal: " + totalGoal;

    goalMessage.innerHTML = output;
}
// Calculate the total weekly task goal for a user - End


// Add a task to the array and display it - Start
function addTask() {
    var taskName = taskNameInput.value;
    var taskPriority = taskPriorityInput.value;
    var taskImportant = taskImportantInput.checked;

    if (taskName !== "") {
        var task = {
            id: nextTaskId,
            name: taskName,
            priority: taskPriority,
            isImportant: taskImportant,
            isCompleted: false
        };

        tasks.push(task);
        nextTaskId = nextTaskId + 1;

        displayTask(task);

        console.log(JSON.stringify(tasks));

        taskNameInput.value = "";
        taskImportantInput.checked = false;
    }
}
// Add a task to the array and display it - End


// Create the task's DOM nodes and add them to the task list - Start
function displayTask(task) {
    var taskNode = document.createElement("li");
    var taskText = document.createElement("span");
    var completeButton = document.createElement("button");

    taskText.textContent = task.name + " - " + task.priority;
    completeButton.textContent = "Complete";
    completeButton.setAttribute("type", "button");

    // Save the task object on its list item for the completion function
    taskNode.taskData = task;

    // Apply styling based on priority
    if (task.priority === "High") {
        taskNode.style.fontWeight = "bold";
        taskNode.style.fontSize = "18px";
    } else if (task.priority === "Medium") {
        taskNode.style.fontSize = "16px";
        taskNode.style.color = "orange";
    } else if (task.priority === "Low") {
        taskNode.style.fontSize = "14px";
        taskNode.style.color = "green";
    }

    // Important tasks should be red
    if (task.isImportant === true) {
        taskNode.style.color = "red";
    }

    taskNode.appendChild(taskText);
    taskNode.appendChild(completeButton);
    taskItems.appendChild(taskNode);

    completeButton.addEventListener("click", function () {
        markTaskComplete(taskNode);
    });
}
// Create the task's DOM nodes and add them to the task list - End


// Mark a task complete using its DOM node - Start
function markTaskComplete(taskNode) {
    var task = taskNode.taskData;

    if (task.isCompleted === false) {
        task.isCompleted = true;
        taskNode.style.textDecoration = "line-through";

        console.log(JSON.stringify(tasks));
    }
}
// Mark a task complete using its DOM node - End


// Delete all tasks from the array and the page - Start
function deleteTaskList() {
    tasks = [];
    taskItems.innerHTML = "";

    console.log(JSON.stringify(tasks));
}
// Delete all tasks from the array and the page - End


// Connect the page controls to their functions - Start
goalBtn.addEventListener("click", function () {
    var userName = document.getElementById("user-name").value;
    var dailyGoal = document.getElementById("daily-goal").value;
    var bonusTasks = document.getElementById("bonus-tasks").value;

    weeklyGoal(userName, dailyGoal, bonusTasks);
});

addTaskButton.addEventListener("click", function () {
    addTask();
});

deleteListButton.addEventListener("click", function () {
    deleteTaskList();
});
// Connect the page controls to their functions - End