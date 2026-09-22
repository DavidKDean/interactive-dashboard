var convertButton = document.getElementById("convert-btn");

convertButton.addEventListener("click", function(event) {
    event.preventDefault();

    var input_value = document.getElementById("metric-value").value;

    var conversion_type = document.getElementById("conversion-type");
    var selected_index = conversion_type.selectedIndex;

    var conversion = document.getElementsByTagName("option")[selected_index].value;

    input_value = parseFloat(input_value);

    var result;
    var output;

    if (conversion === "inch to centimeter") {
        result = input_value * 2.54;
        output = input_value + " inches is " + result.toFixed(2) + " centimeters.";

    } else if (conversion === "foot to centimeter") {
        result = input_value * 30.48;
        output = input_value + " feet is " + result.toFixed(2) + " centimeters.";

    } else if (conversion === "yard to meter") {
        result = input_value * 0.91;
        output = input_value + " yards is " + result.toFixed(2) + " meters.";

    } else if (conversion === "mile to kilometer") {
        result = input_value * 1.61;
        output = input_value + " miles is " + result.toFixed(2) + " kilometers.";

    } else if (conversion === "centimeter to inch") {
        result = input_value * 0.39;
        output = input_value + " centimeters is " + result.toFixed(2) + " inches.";

    } else if (conversion === "centimeter to foot") {
        result = input_value * 0.0328;
        output = input_value + " centimeters is " + result.toFixed(2) + " feet.";

    } else if (conversion === "meter to yard") {
        result = input_value * 1.09;
        output = input_value + " meters is " + result.toFixed(2) + " yards.";

    } else if (conversion === "kilometer to mile") {
        result = input_value * 0.62;
        output = input_value + " kilometers is " + result.toFixed(2) + " miles.";

    } else {
        output = "Please select a valid conversion.";
    }

    document.getElementById("conversion-result").innerHTML = output;
});