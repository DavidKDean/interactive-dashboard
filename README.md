# Interactive Productivity Dashboard

This project is a web-based dashboard built for Web Markup and Scripting (2026FA.WEB.115.0002) to demonstrate interactive JavaScript features.

## TODO: Future Enhancements

* [x] Add a weekly task goal calculator
* [x] Add an Imperial/Metric conversion tool
* [ ] Integrate a task list with array storage
* [ ] Add JavaScript logic for a live clock

## Weekly Task Goals

The weekly task goal calculator calculates a user's total weekly task target based on their daily task goal and any additional weekly bonus tasks. The daily goal is multiplied by five workdays, and the weekly bonus tasks are then added to determine the user's total weekly goal.

## Imperial/Metric Converter

The Imperial/Metric Converter allows users to convert measurements between Imperial and Metric units. The application accepts a numeric value and a selected conversion type. It supports conversions involving inches, feet, yards, miles, centimeters, meters, and kilometers.

### Logic and Pseudocode

The following pseudocode describes the logic used to build the Imperial/Metric Converter:

```text
BEGIN

    INPUT value
    SET value = CONVERT value TO NUMBER

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
        DISPLAY "Invalid conversion selected."

END
```

## Magic Eight Ball

The Magic Eight Ball allows the user to enter a yes/no question and receive a randomly selected response. The application stores possible responses in an array and uses JavaScript to randomly select and display an answer.

The Magic Eight Ball checks the question field before displaying an answer. If no question is entered, the user is prompted to enter a yes/no question. The reset button hides the current response so the user can ask another question.

### Bonus Feature

The Magic Eight Ball also includes a bonus feature that allows the user to add a new response. The **Add New Response** button prompts the user to enter a response. The new response is added to the `answers` array using `push()`.

The program also uses `console.log()` to display the new response and the updated number of responses in the array.