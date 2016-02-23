/*            GLOBAL CONSTANTS              */

var c = document.getElementById("background");
var ctx = c.getContext("2d");
ctx.lineWidth = 4;
ctx.font = "60px Arial";

var height = c.height;
var width = c.width;

var radius = 0;
var max = 250;
var inc = 1;
var keep_drawing = true;

var start_button = document.getElementById("start");
var stop_button = document.getElementById("stop");

var rainbowGradient = ctx.createLinearGradient(0, 0, width, 0);
rainbowGradient.addColorStop(0, "red");                            // R
rainbowGradient.addColorStop(0.125,"orange");                      // O
rainbowGradient.addColorStop(0.25, "yellow");                      // Y
rainbowGradient.addColorStop(0.375, "green");                      // G
rainbowGradient.addColorStop(0.5, "blue");                         // B
rainbowGradient.addColorStop(0.625, "cyan");                       // Wasn't sure about indigo. Used cyan
rainbowGradient.addColorStop(0.75, "magenta");                     // Gotta throw some magenta in
rainbowGradient.addColorStop(0.875, "purple");                     // V

/*      Init with a black border line       */
var init = function init() {
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(0, 0, width, height);
};

/*             Clear the canvas             */
var clear_canvas = function clear_canvas() {
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height); // Clear the entire canvas
    ctx.closePath();
    init(); // Draw the border
};

var draw_dot = function draw_dot() {
    clear_canvas();
    radius += inc;

    if (radius >= max) {
        inc = -1;
    } else if (radius <= 0) {
        inc = 1;
    }

    ctx.beginPath();
    ctx.fillStyle = rainbowGradient;
    ctx.arc(width / 2, height / 2, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    if (keep_drawing) {
        window.requestAnimationFrame(draw_dot);
    }
}

// Stop the drawing

// Add a click event listener to the button to clear
start_button.addEventListener("click", function() {
    keep_drawing = true;
    window.requestAnimationFrame(draw_dot);
});

stop_button.addEventListener("click", function() {
    keep_drawing = false;
});

init(); // Draw the border

