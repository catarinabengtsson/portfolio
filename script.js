// Skills section
const card = document.getElementById('card');

const parentObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.getElementById('cardImg').classList.add('fade-in');
            document.getElementById('cardImg2').classList.add('fade-in');
            document.getElementById('cardImg3').classList.add('fade-in');
        }
    });
},
    options = {
        threshold: 0.5,
    });

// Start observing the parent element
parentObserver.observe(card);

// Portfolio
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, options = {
    threshold: 0.1,
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Minimize navbar
window.onscroll = function () {
    // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 || window.scrollY > 80) {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60 || window.scrollY > 60) {
        document.getElementById("myTopnav").classList.remove('topnav-big');
    } else {
        document.getElementById("myTopnav").classList.add('topnav-big');
    }
};

//  Mobile menu
var navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

const observer2 = new IntersectionObserver((entries) => {
    const logoElement = document.getElementById('footer-logo') // best to save reference to this element so DOM query is only required once
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            logoElement.style.transform = "scale(" + (0.25 + entry.intersectionRatio) + "," + (0.25 + entry.intersectionRatio) + ")";
            logoElement.style.opacity = entry.intersectionRatio;
            if (entry.intersectionRatio < 0.99) {
                logoElement.style.transition = '0.15s'
            } else {
                logoElement.style.transition = '0.75s'
            }
        } else {
            document.getElementById("footer-logo").classList.remove('scale-img');
        }
    });
}, options = {
    threshold: buildThresholdList(),
});

const hiddenElements2 = document.querySelectorAll('.footer');
hiddenElements2.forEach((el) => observer2.observe(el));

function buildThresholdList() {
    let thresholds = [];
    let numSteps = 100;

    for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}