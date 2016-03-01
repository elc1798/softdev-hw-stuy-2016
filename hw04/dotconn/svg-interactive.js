var pic = document.getElementById('vimage');
var clear_button = document.getElementById('clear');

var prevX = -1;
var prevY = -1;

var SVGNS = "http://www.w3.org/2000/svg";

var change_color = function change_color(e) {
    e.preventDefault();
    this.setAttribute("fill", "green");
};

var draw_circle = function draw_circle(cx, cy, r) {
    var c = document.createElementNS(SVGNS, 'circle');
    c.setAttribute('cx', cx);
    c.setAttribute('cy', cy);
    c.setAttribute('r', r);
    c.setAttribute('fill', 'red');
    c.setAttribute('stroke', 'black');
    c.addEventListener("click", change_color);
    pic.appendChild(c);
};

var draw_line = function draw_line(x, y) {
    var l = document.createElementNS(SVGNS, 'line');
    l.setAttribute('x1', prevX.toString());
    l.setAttribute('y1', prevY.toString());
    l.setAttribute('x2', x.toString());
    l.setAttribute('y2', y.toString());
    l.setAttribute('color', 'black');
    l.setAttribute('stroke', 'black');
    pic.appendChild(l);
};

var clicked = function clicked(e) {
    if (e.toElement == this) {
        draw_circle(e.offsetX, e.offsetY, 20);
        if (prevX > 0 && prevY > 0) {
            draw_line(e.offsetX, e.offsetY);
        }
        prevX = e.offsetX;
        prevY = e.offsetY;
    }
};

var clear_svg = function clear_svg() {
    var toDelete = pic.children;
    for (var i = toDelete.length - 1; i >= 0; i--) {
        pic.removeChild(toDelete[i]);
    }
    prevX = -1;
    prevY = -1;
};

pic.addEventListener("click", clicked);
clear_button.addEventListener("click", clear_svg);

