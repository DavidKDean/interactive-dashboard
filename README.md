# Interactive Productivity Dashboard

This project is a web-based dashboard built for Web Markup and Scripting (2026FA.WEB.115.0002). It demonstrates interactive JavaScript features, including a weekly task goal calculator, an Imperial/Metric converter, a task list, a Magic Eight Ball, and a digital clock.

## TODO: Future Enhancements

- [x] Add a weekly task goal calculator
- [x] Add an Imperial/Metric conversion tool
- [x] Integrate a task list with array storage
- [x] Add JavaScript logic for a live clock

## Weekly Task Goals

The weekly task goal calculator calculates a user's total weekly task target based on their daily task goal and any additional weekly bonus tasks. It multiplies the daily goal by five workdays, then adds the weekly bonus tasks.

## Weekly Task List

The task list lets the user add tasks with a name, priority, and important status. Each task is stored as an object in a JavaScript array with these properties:

- `id`
- `name`
- `priority`
- `isImportant`
- `isCompleted`

Tasks are added to the page using DOM nodes. High, Medium, and Low priority tasks receive different styles. Important tasks are highlighted in red. The Complete button marks a task as completed and applies a strikethrough. The Delete List button clears the displayed tasks and the array.

The full task array is displayed in the browser console after a task is added, completed, or deleted.

## Imperial/Metric Converter

The Imperial/Metric Converter allows users to convert measurements between Imperial and Metric units. The application accepts a numeric value and a selected conversion type. It supports conversions involving inches, feet, yards, miles, centimeters, meters, and kilometers. Results are displayed to two decimal places.

### Logic and Pseudocode

The following pseudocode describes the logic used to build the Imperial/Metric Converter:

```text
BEGIN

    INPUT value
    INPUT conversion

    IF conversion = "inch to centimeter" THEN
        SET result = value * 2.54
        SET result = ROUND result TO 2 DECIMAL PLACES
        DISPLAY result

    ELSE IF conversion = "foot to centimeter" THEN
        SET result = value * 30.48
        SET result = ROUND result TO 2 DECIMAL PLACES
        DISPLAY result

    ELSE IF conversion = "yard to meter" THEN
        SET result = value * 0.91
        SET result = ROUND result TO 2 DECIMAL PLACES
        DISPLAY result

    ELSE IF conversion = "mile to kilometer" THEN
        SET result = value * 1.61
        SET result = ROUND result TO 2 DECIMAL PLACES
        DISPLAY result

    ELSE IF conversion = "centimeter to inch" THEN
        SET result = value * 0.39
        SET result = ROUND result TO 2 DECIMAL PLACES
        DISPLAY result

    ELSE IF conversion = "centimeter to foot" THEN
        SET result = value * 0.0328
        SET result = ROUND result TO 2 DECIMAL PLACES
        DISPLAY result

    ELSE IF conversion = "meter to yard" THEN
        SET result = value * 1.09
        SET result = ROUND result TO 2 DECIMAL PLACES
        DISPLAY result

    ELSE IF conversion = "kilometer to mile" THEN
        SET result = value * 0.62
        SET result = ROUND result TO 2 DECIMAL PLACES
        DISPLAY result

    ELSE
        DISPLAY "Please select a valid conversion."

END
```

## Magic Eight Ball

The Magic Eight Ball allows users to enter a yes-or-no question and receive a randomly selected response. The application uses JavaScript to select an answer from an array of possible responses.

Users can ask another question using the reset button. An additional feature allows users to add new responses to the answer array.

## Digital Clock

The Digital Clock displays the current time and date on the dashboard. It uses JavaScript's built-in `Date` object to retrieve the current hours, minutes, seconds, and calendar date.

The clock updates automatically every 1,000 milliseconds (one second) using the `setInterval()` method.

The clock includes the following features:

- Displays the current time in a 12-hour format.
- Uses AM and PM to identify the current time session.
- Adds leading zeros to hours, minutes, and seconds when necessary.
- Displays the current date using `toLocaleDateString()`.
- Updates the time and date dynamically on the dashboard.

The JavaScript uses `getHours()`, `getMinutes()`, `getSeconds()`, and `toLocaleDateString()` to retrieve date and time information. The `innerHTML` property updates the clock and calendar date displayed on the page.