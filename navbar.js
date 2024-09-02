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
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function mobileMenu() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("myNavlinks");

    if (x.className === "topnav" || x.className === "topnav topnav-big") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

    if (y.className === "navlinks") {
        y.className += " responsive";
    } else {
        y.className = "navlinks";
    }
}