
// from data.js
var tableData = data;
var tbody = d3.select("tbody");

function buildtable(data){
// YOUR CODE HERE!
tbody.html("")
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}
// Call build table with table data 
//Building a function that can be resused above
var filter = d3.select("#filter-btn");

buildtable(tableData)
// Use D3 `.on` to attach a click handler for upvotes
filter.on("click", function() {
  // Select current count
d3.event.preventDefault();
var inputElement = d3.select("#datetime");
// Get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue)
var filteredData = tableData.filter(row => row.datetime === inputValue);
console.log(filteredData);
buildtable(filteredData)
})