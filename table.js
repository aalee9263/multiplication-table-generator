// script.js

function generateTable() {
    var tableNumber = parseInt(document.getElementById('tableNumber').value);
    var tableLength = parseInt(document.getElementById('tableLength').value);
  
    if (isNaN(tableNumber) || isNaN(tableLength)) {
      alert("Please enter valid numbers for table number and length.");
      return;
    }
  
    var tableHtml = '<table>';
    tableHtml += '<tr><th>Multiplier</th><th>Result</th></tr>';
  
    for (var i = 1; i <= tableLength; i++) {
      var result = tableNumber * i;
      tableHtml += '<tr><td>' + tableNumber + ' x ' + i + '</td><td>' + result + '</td></tr>';
    }
  
    tableHtml += '</table>';
  
    document.getElementById('tableContainer').innerHTML = tableHtml;
  }
  