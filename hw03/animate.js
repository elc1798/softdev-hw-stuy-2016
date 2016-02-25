/*            GLOBAL CONSTANTS              */

var c = document.getElementById("background");
var ctx = c.getContext("2d");
ctx.lineWidth = 4;
ctx.font = "60px Arial";

var height = c.height;
var width = c.width;

var start_button = document.getElementById("start");
var stop_button = document.getElementById("stop");

var animus = null;

var mortum = function mortum() {
    if (animus != null) {
        window.cancelAnimationFrame(animus);
    }
}

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

    mortum();

    var curr_x = width / 2;
    var curr_y = height / 2;
    var vx = (Math.round(Math.random() * 100) % 5) + 1;
    var vy = (Math.round(Math.random() * 100) % 5) + 1;

    var img = new Image();
    img.src = "sharingan.png";

    var update = function update() {
        clear_canvas();

        ctx.drawImage(img, curr_x, curr_y, 50, 50); // Draws the image

        if (curr_x + vx + 50 >= width || curr_x + vx <= 0) {
            vx *= -1;
        }
        if (curr_y + vy + 50 >= height || curr_y + vy <= 0) {
            vy *= -1;
        }

        curr_x += vx;
        curr_y += vy;

        animus = window.requestAnimationFrame(update);
    }

    update();
}

// Add a click event listener to the button to clear
start_button.addEventListener("click", draw);
stop_button.addEventListener("click", mortum);


init(); // Draw the border

