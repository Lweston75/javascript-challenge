// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("tbody")

function displayData(data){
    tbody.text(""),
    data.forEach(function(dighting){
        new_tr = tbody.append("tr")
        Object.enteries(sighting).forEach(function([key, valur]){
            new_td = new+true.append("td").text(value)
        })
    })
}

displayData(tableData)

var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

function clickSelect(){
    d3.event.preventDefault();
    console.log(dateImputText.propertiy("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    displayData(new_table);
}

dataImputText.on("change", clickSelect)