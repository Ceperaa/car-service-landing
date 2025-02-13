document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
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
});

// анимация переходов между разделами
function toggleMenu() {
    document.querySelector('nav').classList.toggle('show');
}

function closeMenu() {
    document.querySelector('nav').classList.remove('show');
}

document.addEventListener('click', function (event) {
    let menu = document.querySelector('nav');
    let toggle = document.querySelector('.menu-toggle');
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove('show');
    }
});

// координаты места на карте и маркер
function initMap() {
    const mark = [52.398347, 31.143782];
    var map = new ymaps.Map("map", {
        center: mark, // Координаты
        zoom: 13
    });
    // Маркер автосервиса
    var autoServicePlacemark = new ymaps.Placemark(mark, {
        balloonContent: "<strong>Автоферма</strong><br>ул. Улуковский сельсовет, 30"
    }, {
        preset: "islands#redAutoIcon"
    });
    map.geoObjects.add(autoServicePlacemark);
}