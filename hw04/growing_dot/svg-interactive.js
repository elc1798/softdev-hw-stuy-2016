var pic = document.getElementById('vimage');
var stop_button = document.getElementById('stop');

var going = false;
var intervalID;

var svgNSID = "http://www.w3.org/2000/svg";

var draw_circle = function draw_circle(cx, cy, r) {
    var c = document.createElementNS(svgNSID, 'circle');
    c.setAttribute('cx', cx);
    c.setAttribute('cy', cy);
    c.setAttribute('r', r);
    c.setAttribute('fill', 'red');
    c.setAttribute('stroke', 'black');
    pic.appendChild(c);
};

var clear_all = function clear_all() {
    var toDelete = pic.children;
    for (var i = toDelete.length - 1; i >= 0; i--) {
        pic.removeChild(toDelete[i]);
    }
};

var grow = function grow() {
    var radius = 1;
    var inc = 1;

    clear_all();

    draw_circle(250, 250, radius);
    var animate_code = function animate_code() {
        var c = document.getElementsByTagName("circle")[0];
        radius = parseInt(c.getAttribute("r")) + inc;
        if (radius > 245 || radius <= 0) {
            inc *= -1;
        }
        clear_all();
        draw_circle(250, 250, radius);
    };
    intervalID = window.setInterval(animate_code, 16);
};

var clicked = function clicked(e) {
    if (!going && e.toElement == this) {
        grow();
        going = true;
    }
};

pic.addEventListener("click", clicked);
stop_button.addEventListener("click", function() {
    window.clearInterval(intervalID);
    going = false;
});

