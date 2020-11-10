// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");


tableData.forEach((sighting) => {

	
	var row = tbody.append("tr");
	Object.entries(sighting).forEach(([key, value]) => {
		var cell = row.append("td");
		cell.text(value);
	});
});

var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {


  d3.event.preventDefault();

  var inputElement = d3.select(".form-control");
  var inputValue = inputElement.property("value");
	var results = tableData.filter(sighting => sighting.datetime === inputValue);
	
	tbody.html("");

	if (results.length === 0) {
		tbody.text(`No sightings on ${inputValue}.`);
	}

	else {
		results.forEach((sighting) => {
			var row = tbody.append("tr");
			Object.entries(sighting).forEach(([key, value]) => {
				var cell = row.append("td");
				cell.text(value);
			});
		});
	};
};
