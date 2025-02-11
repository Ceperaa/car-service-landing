document.addEventListener("DOMContentLoaded", function () {
    const formPopup = document.querySelector(".form-popup");
    const closeButton = document.getElementById("close-form");

    // Функция для открытия формы
    function openForm() {
        formPopup.classList.add("show");
    }

    // Функция для закрытия формы
    function closeForm() {
        formPopup.classList.remove("show");
    }

    // Закрытие формы по кнопке
    closeButton.addEventListener("click", closeForm);

    // Закрытие формы при клике вне её области
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("form-popup")) {
            closeForm();
        }
    });

    // Пример вызова формы (нужна кнопка с id="open-form-button")
    document.getElementById("open-form-button")?.addEventListener("click", openForm);
});