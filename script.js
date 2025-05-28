/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
//const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
// if (btn) {
// btn.onclick = function() {
// The JS works in conjunction with the 'dipped' code in style.css
//    btn.classList.toggle("dipped");

// };
//}
function imgchange() {
  // Flower randomizer
  var myImages1 = new Array();
  myImages1[1] =
    "images/flwr2.jpeg";
  myImages1[2] =
    "images/flwr3.jpeg";
  myImages1[3] =
    "images/flwr4.jpeg";
  myImages1[4] =
    "images/flwr5.jpeg";
  myImages1[5] =
    "images/flwr6.jpeg";
    myImages1[6] =
    "images/flwr7.jpeg";
    myImages1[7] =
    "images/flwr8.jpeg?";
    myImages1[8] =
    "images/flwr9.jpeg";
    myImages1[9] =
    "images/flwr10.jpeg";
      myImages1[10] =
    "images/flwr10.jpeg";
      myImages1[11] =
    "images/flwr11.jpeg";
        myImages1[12] =
    "images/flwr12.jpeg";
        myImages1[13] =
    "images/flwr13.jpeg";
        myImages1[14] =
    "images/flwr14.jpeg";
  var rnd = Math.floor(Math.random() * myImages1.length);
  if (rnd == 0) {
    rnd = 1;
  }

  document.getElementById("gen-img").src = myImages1[rnd];
}
// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
