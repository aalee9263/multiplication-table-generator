// Define a function named generateTable
function generateTable() {
    // Get the table number entered by the user and convert it to an integer
    var tableNumber = parseInt(document.getElementById('tableNumber').value);

    // Get the table length entered by the user and convert it to an integer
    var tableLength = parseInt(document.getElementById('tableLength').value);

    // Check if either the table number or length is not a valid number
    if (isNaN(tableNumber) || isNaN(tableLength)) {
        // Display an alert if the input is not a valid number
        alert("Please enter valid numbers for table number and length.");
        // Exit the function if the input is not valid
        return;
    }

    // Create the initial HTML code for the table
    var tableHtml = '<table>';
    // Add the header row to the table
    tableHtml += '<tr><th>Multiplier</th><th>Result</th></tr>';

    // Use a loop to generate rows for the multiplication table
    for (var i = 1; i <= tableLength; i++) {
        // Calculate the result of the multiplication
        var result = tableNumber * i;
        // Add a new row to the table with the multiplication expression and result
        tableHtml += '<tr><td>' + tableNumber + ' x ' + i + '</td><td>' + result + '</td></tr>';
    }

    // Close the HTML table tag
    tableHtml += '</table>';

    // Set the innerHTML of the element with ID 'tableContainer' to the generated table HTML
    document.getElementById('tableContainer').innerHTML = tableHtml;
}
