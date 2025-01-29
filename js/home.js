document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const form = document.querySelector(".form-popup");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelector("#order-btn").addEventListener("click", () => {
        form.style.display = "block";
    });

    document.querySelector("#close-form").addEventListener("click", () => {
        form.style.display = "none";
    });

    document.querySelector("#order-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch("https://your-telegram-bot-url", {
            method: "POST",
            body: formData,
        }).then(() => {
            alert("Заявка отправлена!");
            form.style.display = "none";
        });
    });
});
function toggleMenu() {
    document.querySelector('nav').classList.toggle('show');
}

function closeMenu() {
    document.querySelector('nav').classList.remove('show');
}

document.addEventListener('click', function(event) {
    let menu = document.querySelector('nav');
    let toggle = document.querySelector('.menu-toggle');
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove('show');
    }
});