
 
var color ="blue";
var colors = document.getElementsByClassName('color');
var svgElements;

document.getElementById("current_color").style.backgroundColor = color;


loadSvg('lion');

document.addEventListener('click', function(event){
  console.log(event.target.tagName);
});
Array.from(colors).forEach(function(element) {
  element.addEventListener('click', function(event) {
    var target = event.target;
    color = window.getComputedStyle(target, null).getPropertyValue("background-color");
    document.getElementById("current_color").style.backgroundColor = color;
  });
})

 function loadSvg(fileName) {
  var target = document.getElementById('pictureContainer');

  if(svgElements){
    svgElements.off();
  }

  if(!fileName) {
    fileName = document.getElementById("select").value;
  } 

  // If SVG is supported
  if (typeof SVGRect != "undefined") {
    // Request the SVG file
    var ajax = new XMLHttpRequest();
    ajax.open("GET", 'assets/' + fileName + ".svg", true);
    ajax.send();

    // Append the SVG to the target
    ajax.onload = function(e) {
      target.innerHTML = ajax.responseText;

      svgElements = $("#pictureContainer svg > *");
      svgElements.click(function() {
        $(this).css("fill", color);
      });
    }
  } 
}
 