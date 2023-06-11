// Get the paragraph element
var paragraph = document.getElementById("zoomed-paragraph");

// Get the zoom in button element
var zoomInButton = document.getElementById("zoom-in-button");

// Get the zoom out button element
var zoomOutButton = document.getElementById("zoom-out-button");

// Add click event listener to zoom in button
zoomInButton.addEventListener("click", function () {
  // Get the current font size of the paragraph
  var fontSize = parseFloat(window.getComputedStyle(paragraph).fontSize);

  // Increase the font size by 10px
  paragraph.style.fontSize = (fontSize + 10) + "px";
});

// Add click event listener to zoom out button
zoomOutButton.addEventListener("click", function () {
  // Get the current font size of the paragraph
  var fontSize = parseFloat(window.getComputedStyle(paragraph).fontSize);

  // Decrease the font size by 10px
  paragraph.style.fontSize = (fontSize - 10) + "px";
});
