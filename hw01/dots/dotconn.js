/*            GLOBAL CONSTANTS              */

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
ctx.lineWidth = 4;
ctx.font = "60px Arial";

var height = c.height;
var width = c.width;
var dot_radius = 20;

var clear_button = document.getElementById("clear");
var rainbow_button = document.getElementById("rainbow");

var rainbowGradient = ctx.createLinearGradient(0, 0, width, 0);
rainbowGradient.addColorStop(0, "red");                            // R
rainbowGradient.addColorStop(0.125,"orange");                      // O
rainbowGradient.addColorStop(0.25, "yellow");                      // Y
rainbowGradient.addColorStop(0.375, "green");                      // G
rainbowGradient.addColorStop(0.5, "blue");                         // B
rainbowGradient.addColorStop(0.625, "cyan");                       // Wasn't sure about indigo. Used cyan
rainbowGradient.addColorStop(0.75, "magenta");                     // Gotta throw some magenta in
rainbowGradient.addColorStop(0.875, "purple");                     // V

// Rainbows are special. Are you special?
var is_special = false;

// Variables to track location of previous dot, so we can connect them
var prevX = -1;
var prevY = -1;

/*      Init with a black border line       */
var init = function init() {
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(0, 0, height, width);
};

/*          Draw a dot, given (x,y)         */
var draw_dot = function draw_dot(x, y) {
    ctx.beginPath();                // Begin new path for the dot
    ctx.strokeStyle = "#000000";    // Set "border" color
    ctx.fillStyle = "#FF1111";
    if (is_special) {
        ctx.fillStyle = rainbowGradient;
        ctx.strokeStyle = rainbowGradient;
    }
    ctx.arc(x, y, dot_radius, 0, 2 * Math.PI); // Draw a circle
    ctx.fill();                     // Fill in the circle
    ctx.stroke();                   // Render the border
    ctx.closePath();                // Explicitly close the path
};

/*   Draw a line from (x0, y0) to (x1, y1)  */
var connect = function connect(x, y) {
    ctx.beginPath();                // Begin a new path for the dot
    ctx.strokeStyle = "#111111";    // Draw a grayish darkish line
    if (is_special) {
        ctx.fillStyle = rainbowGradient;
        ctx.strokeStyle = rainbowGradient;
    }
    ctx.moveTo(prevX, prevY);       // Start point
    ctx.lineTo(x, y);               // Line to end point
    if (prevX >= 0 && prevY >= 0) { // Only draw if positive
        ctx.stroke();               // Draw!
    }
    ctx.closePath();                // Close the path
}

/* Handler for draw_dot taking an event call */
var draw_on_click = function draw_on_click(e) {
    // By default, mouse coordinates are absolute coordinates on the page
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    // Set the mouse location accordingly with offsets and layers
    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    } else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }

    connect(mouseX, mouseY); // Draw the line, so the dots are drawn on top of the line to cover it
    draw_dot(mouseX, mouseY); // Call the draw function
    // Set the current dot location as the previous dot location for the next
    // iteration
    prevX = mouseX;
    prevY = mouseY;
    init(); // Keep the border if drawn on the border
};

/*            Taste the Rainbow!            */
var toggle_rainbow = function toggle_rainbow() {
    is_special = !is_special;
}

/*             Clear the canvas             */
var clear_canvas = function clear_canvas(e) {
    e.preventDefault(); // Do not run the button's default action
    ctx.clearRect(0, 0, width, height); // Clear the entire canvas
    // Set the previous coordinates to initial values
    prevX = -1;
    prevY = -1;
    init(); // Draw the border
};

// Add a click event listener on the canvas to draw dots on click
c.addEventListener("click", draw_on_click);

// Add a click event listener to the button to clear
clear_button.addEventListener("click", clear_canvas);

// Add a click event listener to the button to toggle our special-ness
rainbow_button.addEventListener("click", toggle_rainbow);

init(); // Draw the border

