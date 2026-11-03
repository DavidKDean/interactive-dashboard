
function updateClock() {

    // Create a new Date object
    const currentDate = new Date();

    // Get the current hours, minutes, and seconds
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Determine AM or PM
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    // Convert to 12-hour time
    if (hours === 0) {
        hours = 12;
    }
    else if (hours > 12) {
        hours = hours - 12;
    }

    // Add leading zeros when needed
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Format the time
    const timeString = hours + ":" + minutes + ":" + seconds + " " + session;

    // Get the current calendar date
    const dateString = currentDate.toLocaleDateString();

    // Update the HTML elements
    document.getElementById("clock-face").innerHTML = timeString;
    document.getElementById("calendar-date").innerHTML = dateString;
}

// Run the clock immediately
updateClock();

// Update the clock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);