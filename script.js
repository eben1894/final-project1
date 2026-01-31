document.addEventListener("DOMContentLoaded", function () {
    const clickableItems = document.querySelectorAll('button, a.btn, .btn-pill, .contact-btn, .shop-now, .my-link, .login');

    clickableItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            alert("Button clicked This service is not available right now. Thanks.");
        });
    });
    const toggleBtn = document.querySelector('.toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach((element) => {
        observer.observe(element);
    });

});