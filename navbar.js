// Minimize navbar
window.onscroll = function() {
    console.log("kalle");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add('navbar-small');
    } else {
        document.getElementById("navbar").classList.remove('navbar-small');
    }
};

// DEBUG
console.log("Initial window.innerWidth ", window.innerWidth);
window.onresize = function() {
    console.log("onresize: window.innerWidth ", window.innerWidth);
};