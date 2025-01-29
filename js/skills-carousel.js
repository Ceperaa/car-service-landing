document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".skills-carousel");
    const items = document.querySelectorAll(".skill-item");
    const skillText = document.querySelector(".skills-right .skill-text");

    const descriptions = [
        "<span class='highlight'>Мы подберем идеальный новый автомобиль для вас.</span> <br> <span class='small'>Учитываем ваш бюджет, пожелания и предпочтения, работаем с проверенными дилерами.</span>",
        "<span class='highlight'>Покрасим ваш автомобиль под ключ, качественно и быстро.</span> <br> <span class='small'>Используем только качественные материалы, работаем в специализированной покрасочной камере.</span>",
        "<span class='highlight'>Проверим автомобиль по всем базам для вашей уверенности.</span> <br> <span class='small'>Пробиваем историю автомобиля по официальным базам, проверяем юридическую чистоту.</span>",
        "<span class='highlight'>Оценим ваш автомобиль перед продажей с максимальной точностью.</span> <br> <span class='small'>Наши эксперты анализируют состояние автомобиля и помогают определить оптимальную стоимость.</span>"
    ];

    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove("active");
            if (index === currentIndex) {
                item.classList.add("active");
            }
        });

        skillText.classList.remove("visible");
        setTimeout(() => {
            skillText.innerHTML = `
                <div class="skill-text-container">
                    <img src="images/home-${currentIndex + 1} копия.jpg" alt="Skill Image">
                    <span>${descriptions[currentIndex]}</span>
                </div>
            `;
            skillText.classList.add("visible");
        }, 500);
    }

    let interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 3000);

    carousel.addEventListener("mouseover", () => clearInterval(interval));
    carousel.addEventListener("mouseout", () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }, 3000);
    });
});