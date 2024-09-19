setTimeout(function () {
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