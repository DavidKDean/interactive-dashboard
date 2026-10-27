# Interactive Productivity Dashboard

This project is a web-based dashboard built for Web Markup and Scripting (2026FA.WEB.115.0002). It demonstrates interactive JavaScript features, including a weekly task goal calculator, an Imperial/Metric converter, a task list, and a Magic Eight Ball.

## TODO: Future Enhancements

- [x] Add a weekly task goal calculator
- [x] Add an Imperial/Metric conversion tool
- [x] Integrate a task list with array storage
- [ ] Add JavaScript logic for a live clock

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