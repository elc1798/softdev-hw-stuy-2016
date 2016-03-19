var PAGE_WIDTH = document.body.clientWidth - 20;
var allotted = 0;
var unallotted = 0;

var renderBars = function renderBars() {
    // Create and set their lengths
    var selector = d3.select(".chart").selectAll("div");
    selector.data(PRIMARY_NAMES).enter().append("div").style("width", function(d) {
        return (DELEGATES[d][0] * PAGE_WIDTH / 172.0) + "px";
    }).text(function(d) {
        return d + " (" + DELEGATES[d][0] + ")";
    })
    .style("height", "48px")
    .style("background-color", function(d) {
        if (DELEGATES[d][1] == 0) {
            allotted += DELEGATES[d][0];
            return "#f00";
        } else {
            unallotted += DELEGATES[d][0];
            return "#b55";
        }
    })
    .style("font-size", "12px");
};

var renderAllotted = function renderAllotted() {
    d3.select(document.getElementById("allotted")).text("Allotted Delegates: " + allotted).style("font-size", "24px");
};

var renderUnallotted = function renderUnallotted() {
    d3.select(document.getElementById("unallotted")).text("Unallotted Delegates: " + unallotted).style("font-size", "24px");
};

var renderTotal = function renderTotal() {
    d3.select(document.getElementById("total")).text("Total Delegates: " + (allotted + unallotted)).style("font-size", "24px");
};

var renderKey = function renderKey() {
    var selector = d3.select(".key").selectAll("div");
    selector.data([0, 1]).enter().append("div").style("width", PAGE_WIDTH / 4 + "px")
        .text(function(d) {
            return d === 0 ? "Allotted" : "Unallotted";
        })
    .style("background-color", function(d) {
        return d === 0 ? "#f00" : "#b55";
    })
    .style("font-size", "18px");
};

// lol make dat title bigger bruh

d3.selectAll("h1").style("font-size", "48px");
renderKey();
renderBars();
renderAllotted();
renderUnallotted();
renderTotal();

