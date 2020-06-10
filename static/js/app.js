
var tableData = data;
//console.log(tableData);

//data in tbody
var tbody = d3.select("tbody");

//get rows
tableData.forEach(function(getRow) {
    var row = tbody.append("tr");
    Object.entries(getRow).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });


//click filter table
 var button = d3.select("#filter-btn");
 button.on("click", function() {
    console.log("button click");

    tbody.html("");
    var inputElement = d3.select("#datetime");
    console.log(inputElement);

    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    filteredData.forEach(function(selections) {

      console.log(selections);
      var row = tbody.append("tr");
      Object.entries(selections).forEach(function([key, value]) {
          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
      });
  }); 

 });
