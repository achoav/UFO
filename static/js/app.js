// ____________________UFO Sightings - Javascript_____________________________________________________
// This will create 2 functions - "buildTable(data)" and "handleClick(data)""
// ___________________________________________________________________________________________________
// 1. Import the data from 'data.js'
var tableData = data;
// 2. Reference the HTML table using d3
var tbody = d3.select("tbody");
// ___________________________________________________________________________________________________
// 11.5.2. This function called "buildTable" will:
// 1. Loop thru each object on the array (in our case 'data' using 'data.forEach')
// 2. Appended a row to the HTML tableData (via 'tbody.append')
// 3. Added each value from the object in a cell (via 'row.append)
// ___________________________________________________________________________________________________
function buildTable(data) {
tbody.html("");
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}
// _________________________________________________________________________________________________
// 11.5.3. and 11.5.4. This function called "handleClick()" will:
// 1. "var filters = {}" => Empty line that will hold data filters = {}
// 2. "d3.select(#datetime)" =>  tells D3.js to look for #datetime in HTML tags.
// 3. ".property("value")" => grabs the information and holds it 
// 4. "let filteredData = tableData" => we are setting a default fitler and saving into a new variable
// 5. line 5 => recall we set the variable "tableData = data"
// 6. "if" => checks for a date filter using an if statement.
// 7. "filteredData" => shows rows where "row.datetime ==date" : that matchs the "date" selected by user
// 8. "handleClick" => uses a function that handles the "clicks" -ATT: outside of the if loop
// 9. "buildTable" => build table when the page loads
// _________________________________________________________________________________________________

var filters = {};
function handleClick() {
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
if (date) {
  filteredData = filteredData.filter(row => row.datetime === date);}
  buildTable(filteredData);
};
d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);
