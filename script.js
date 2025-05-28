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
    "https://cdn.glitch.global/3e847397-f3aa-4e17-8bcc-8f4d3321b749/flwr2.jpeg?v=1652398743703";
  myImages1[2] =
    "https://cdn.glitch.global/3e847397-f3aa-4e17-8bcc-8f4d3321b749/flwr3.jpeg?v=1652398748263";
  myImages1[3] =
    "https://cdn.glitch.global/3e847397-f3aa-4e17-8bcc-8f4d3321b749/flwr4.jpeg?v=1652398753479";
  myImages1[4] =
    "https://cdn.glitch.global/3e847397-f3aa-4e17-8bcc-8f4d3321b749/flwr5.jpeg?v=1652398757599";
  myImages1[5] =
    "https://cdn.glitch.global/3e847397-f3aa-4e17-8bcc-8f4d3321b749/flwr6.jpeg?v=1652397689595";
    myImages1[6] =
    "https://cdn.glitch.global/3e847397-f3aa-4e17-8bcc-8f4d3321b749/flwr7.jpeg?v=1652397689595";
    myImages1[7] =
    "https://cdn.glitch.global/3e847397-f3aa-4e17-8bcc-8f4d3321b749/flwr8.jpeg?v=1652397689595";
    myImages1[8] =
    "https://cdn.glitch.global/3e847397-f3aa-4e17-8bcc-8f4d3321b749/flwr9.jpeg?v=1652397689595";
    myImages1[9] =
    "https://cdn.glitch.global/3e847397-f3aa-4e17-8bcc-8f4d3321b749/flwr10.jpeg?v=1652397689595";
      myImages1[10] =
    "https://cdn.glitch.global/3e847397-f3aa-4e17-8bcc-8f4d3321b749/flwr10.jpeg?v=1652745757077";
      myImages1[11] =
    "https://cdn.glitch.global/355fedcb-fbcb-469e-8011-b49765c6b44a/flwr11.jpeg?v=1683663008831";
        myImages1[12] =
    "https://cdn.glitch.global/355fedcb-fbcb-469e-8011-b49765c6b44a/flwr12.jpeg?v=1683663012746";
        myImages1[13] =
    "https://cdn.glitch.global/355fedcb-fbcb-469e-8011-b49765c6b44a/flwr13.jpeg?v=1683663015576";
        myImages1[14] =
    "https://cdn.glitch.global/355fedcb-fbcb-469e-8011-b49765c6b44a/flwr14.jpeg?v=1683663018065";
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
