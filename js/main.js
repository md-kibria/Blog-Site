
var menu = document.getElementById("slideout-menu");
var hideb = document.getElementById("hide");
var showb = document.getElementById("show");

function show() {
    menu.style.display = "flex";
    hideb.style.display = "block";
    hideb.style.visibility = "visible";
    showb.style.display = "none";
    showb.style.visibility = "hidden";
}

function hide() {
    menu.style.display = "none";
    hideb.style.display = "none";
    hideb.style.visibility = "hidden";
    showb.style.display = "block";
    showb.style.visibility = "visible";
}