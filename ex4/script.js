// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var myButton = document.getElementById("myButton");
var boxes = Array.from(document.getElementsByClassName("box"));

myButton.addEventListener("click", function(){
    boxes.forEach(element => {
        element.style.backgroundColor = "blue";
    });
})