// Header animation
window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("signature").classList.add('show');
      }, 2500);
});

setTimeout(function() {
    const hiddenElements = document.querySelectorAll('.anchor');
    hiddenElements.forEach((el) => observer.observe(el));
}, 300);
  
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-end');
        }
    });
});

// Add class and minimize navbar
// window.onscroll = function() {
//     console.log("kalle");
//     minimize();
// };

// function minimize() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("navbar").classList.add('navbar-small');
//     } else {
//         document.getElementById("navbar").classList.remove('navbar-small');
//     }
// }