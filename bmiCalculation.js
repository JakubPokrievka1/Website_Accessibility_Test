document.getElementById("bmiForm").addEventListener("submit", function(event) {
    // Prevent the page from refreshing when the form is submitted
    event.preventDefault();

    // Retrieve the user's height and weight
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // Find the section where the result will be displayed
    const result = document.getElementById("bmiResult");

    // Validate the input values
    if (!Number.isFinite(height) || !Number.isFinite(weight) ||
        height <= 0 || weight <= 0) {
        result.textContent = "Please enter a valid height and weight.";
        return;
    }

    // Convert height from centimetres to metres
    const heightInMetres = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMetres * heightInMetres);

    // Determine the BMI category (standard adult ranges)
    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Healthy weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    // Display the result on the webpage
    result.textContent =
        "Your BMI is " + bmi.toFixed(1) + " (" + category + ").";
});
