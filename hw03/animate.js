/*            GLOBAL CONSTANTS              */

var c = document.getElementById("background");
var ctx = c.getContext("2d");
ctx.lineWidth = 4;
ctx.font = "60px Arial";

var height = c.height;
var width = c.width;

var curr_x = width / 2;
var curr_y = height / 2;
var vx = (Math.round(Math.random() * 100) % 5) + 1;
var vy = (Math.round(Math.random() * 100) % 5) + 1;

console.log("Initial vx: " + vx);
console.log("Initial vy: " + vy);

var keep_drawing = true;
var start_button = document.getElementById("start");
var stop_button = document.getElementById("stop");

var img = new Image();
img.src = "sharingan.png";

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

var draw = function draw() {
    clear_canvas();

    /*
     * ctx.beginPath();
     * ctx.fillStyle = "#3311FF";
     * ctx.arc(curr_x, curr_y, ball_radius, 0, 2 * Math.PI);
     * ctx.closePath();
     * ctx.fill();
     */
    ctx.drawImage(img, curr_x, curr_y, 50, 50); // Draws the image

    if (curr_x + vx + 50 >= width || curr_x + vx <= 0) {
        vx *= -1;
    }
    if (curr_y + vy + 50 >= height || curr_y + vy <= 0) {
        vy *= -1;
    }

    curr_x += vx;
    curr_y += vy;

    if (keep_drawing) {
        window.requestAnimationFrame(draw);
    }
}

// Add a click event listener to the button to clear
start_button.addEventListener("click", function() {
    keep_drawing = true;
    window.requestAnimationFrame(draw);
});

stop_button.addEventListener("click", function() {
    keep_drawing = false;
});


init(); // Draw the border

