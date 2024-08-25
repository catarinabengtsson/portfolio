//  Mobile menu
var navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function toggleMenu() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
        console.log("block");
        x.style.display = "none";
    } else {
        console.log("else");
        x.style.display = "block";
    }
}