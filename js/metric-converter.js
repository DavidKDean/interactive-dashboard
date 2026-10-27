// Get the page elements - Start
var convertButton = document.getElementById("convert-btn");
var metricValueInput = document.getElementById("metric-value");
var conversionTypeInput = document.getElementById("conversion-type");
var conversionResult = document.getElementById("conversion-result");
// Get the page elements - End


// Convert the measurement when the button is clicked - Start
convertButton.addEventListener("click", function () {
    var inputValue = metricValueInput.value;
    var conversion = conversionTypeInput.value;

    var result;
    var output;

    if (conversion === "inch to centimeter") {
        result = inputValue * 2.54;
        output = inputValue + " inches is " + result.toFixed(2) + " centimeters.";

    } else if (conversion === "foot to centimeter") {
        result = inputValue * 30.48;
        output = inputValue + " feet is " + result.toFixed(2) + " centimeters.";

    } else if (conversion === "yard to meter") {
        result = inputValue * 0.91;
        output = inputValue + " yards is " + result.toFixed(2) + " meters.";

    } else if (conversion === "mile to kilometer") {
        result = inputValue * 1.61;
        output = inputValue + " miles is " + result.toFixed(2) + " kilometers.";

    } else if (conversion === "centimeter to inch") {
        result = inputValue * 0.39;
        output = inputValue + " centimeters is " + result.toFixed(2) + " inches.";

    } else if (conversion === "centimeter to foot") {
        result = inputValue * 0.0328;
        output = inputValue + " centimeters is " + result.toFixed(2) + " feet.";

    } else if (conversion === "meter to yard") {
        result = inputValue * 1.09;
        output = inputValue + " meters is " + result.toFixed(2) + " yards.";

    } else if (conversion === "kilometer to mile") {
        result = inputValue * 0.62;
        output = inputValue + " kilometers is " + result.toFixed(2) + " miles.";

    } else {
        output = "Please select a valid conversion.";
    }

    conversionResult.innerHTML = output;
});
// Convert the measurement when the button is clicked - End