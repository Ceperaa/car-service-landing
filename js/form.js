

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-popup");
    const successMessage = document.getElementById("success-message");

    document.querySelector("#order-btn").addEventListener("click", () => {
        form.style.display = "block";
    });

    document.querySelector("#close-form").addEventListener("click", () => {
        form.style.display = "none";
    });

    // Функция показа уведомления
    function showSuccessMessage() {
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.opacity = "1";
        }, 50);

        setTimeout(() => {
            successMessage.style.opacity = "0";
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 500);
        }, 1000);
    }

    // Функция отправки сообщения в Telegram
    function sendMessageToTelegram(event, nameId, phoneId, customMessage = null) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        const name = document.getElementById(nameId).value;
        const phone = document.getElementById(phoneId).value;
        const message = customMessage || document.getElementById('message')?.value || "Нет сообщения";

        const data = {
            chat_id: "502528863",
            text: `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`
        };

        fetch("https://api.telegram.org/bot7788107674:AAFaW7PpBnZohfuP36aeQFb-rjg4QfoSzZA/sendMessage", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
            .then(() => {
                form.style.display = "none"; // Закрыть форму после отправки
                showSuccessMessage(); // Показать уведомление
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Произошла ошибка при обработке запроса.');
            });
    }

    // Добавляем обработчики событий для двух форм
    document.querySelector("#order-form").addEventListener("submit", (e) =>
        sendMessageToTelegram(e, "name", "phone")
    );

    document.querySelector("#contact-form").addEventListener("submit", (e) =>
        sendMessageToTelegram(e, "name1", "phone1", "Прошу перезвонить !!!")
    );
});