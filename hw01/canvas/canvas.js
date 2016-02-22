/*            GLOBAL CONSTANTS              */

var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");
ctx.lineWidth = 4;
ctx.font = "60px Arial";

var height = c.height;
var width = c.width;

/*         Draw a black border line         */
ctx.strokeStyle = "#000000";
ctx.strokeRect(0, 0, height, width);

/*    Draw the base of the awesome face     */
ctx.beginPath(); // Start a drawing path
// Draw a circle, centered on the canvas, with radius (height / 2) - 100, and
// from angle 0 to 2PI (in radians)
ctx.arc(width / 2, height / 2, (height / 8) * 3, 0, 2 * Math.PI);
ctx.fillStyle = "#EEEE00"; // Set the fill color to yellow
ctx.fill(); // Render the current "path" that contains our circle, filling in the shape
ctx.stroke(); // Render the border of the circle, giving it a border
ctx.closePath(); // Close the path, so we can start a new one.

/*              Draw the eyes              */

ctx.fillStyle = "#FFFFFF"; // Fill the eyes with white

ctx.beginPath(); // Begin a new path
ctx.arc((width / 16) * 5, (height / 16) * 7, (width / 8), Math.PI, 0); // Left eye
// Fill in the border under the eye, not on the arc
ctx.moveTo((width / 16) * 5 - (width / 8), (height / 16) * 7);
ctx.lineTo((width / 16) * 5 + (width / 8), (height / 16) * 7);
ctx.fill(); // Render the white fill
ctx.stroke(); // Render border
ctx.closePath(); // Close the path, so we can start yet another one

ctx.beginPath(); // Begin a new path
ctx.arc((width / 16) * 11, (height / 16) * 7, (width / 8), Math.PI, 0); // Right eye
// Fill in the border under the eye, not on the arc
ctx.moveTo((width / 16) * 11 - (width / 8), (height / 16) * 7);
ctx.lineTo((width / 16) * 11 + (width / 8), (height / 16) * 7);
ctx.fill(); // Render the white fill
ctx.stroke(); // Render border
ctx.closePath(); // Close the path, so we can start yet another one

ctx.fillStyle = "#000000";

ctx.beginPath(); // Begin a new path
ctx.arc((width / 16) * 6, (height / 16) * 7, (width / 16), Math.PI, 0); // Left pupil
ctx.stroke(); // Render border
ctx.fill(); // Render the white fill
ctx.closePath(); // Close the path, so we can start yet another one

ctx.beginPath(); // Begin a new path
ctx.arc((width / 16) * 12, (height / 16) * 7, (width / 16), Math.PI, 0); // Right pupil
ctx.fill(); // Render the white fill
ctx.stroke(); // Render border
ctx.closePath(); // Close the path, so we can start yet another one

/*              Draw the mouth            */

ctx.fillStyle = "#BD006E"; // Fill the mouth with a dark pink, maroon color

ctx.beginPath(); // Mouth path
ctx.arc(width / 2, height / 2, (height / 32) * 9, 0, Math.PI);
// Fill in the border above the mouth, not on the arc
ctx.moveTo((width / 2) - (height / 32) * 9, height / 2);
ctx.lineTo((width / 2) + (height / 32) * 9, height / 2);
ctx.fill();
ctx.stroke();
ctx.closePath(); // ... close. the. path.

// State that we are awesome!
// Because we are awesome, we use purrrtyyyy colours!
var gradient = ctx.createLinearGradient(0, 0, width, 0);    // Create a gradient variable
gradient.addColorStop(0, "red");                            // R
gradient.addColorStop(0.125,"orange");                      // O
gradient.addColorStop(0.25, "yellow");                      // Y
gradient.addColorStop(0.375, "green");                      // G
gradient.addColorStop(0.5, "blue");                         // B
gradient.addColorStop(0.625, "cyan");                       // Wasn't sure about indigo. Used cyan
gradient.addColorStop(0.75, "magenta");                     // Gotta throw some magenta in
gradient.addColorStop(0.875, "purple");                     // V
ctx.fillStyle = gradient;                                   // Use the gradient as our fill style
ctx.fillText("AWESOME!!!!!!!!!!", (width / 16), (height / 32) * 31); // State well known fact at bottom
ctx.fillText("AWESOME!!!!!!!!!!", (width / 16), (height / 32) * 3);  // State well known fact at top

