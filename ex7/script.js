// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var sectionHeader = document.getElementById("section-header");
var section = document.getElementById("section");

sectionHeader.addEventListener("click", function(){
    section.style.height == "0px" ? section.style.height = "100px" : section.style.height = "0px";
})


 