document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const params = new URLSearchParams(formData).toString();
    fetch("https://api.telegram.org/bot<TOKEN>/sendMessage?chat_id=<CHAT_ID>&text=" + encodeURIComponent(params))
        .then(response => response.json())
        .then(data => alert("Сообщение отправлено!"))
        .catch(error => alert("Ошибка отправки!"));
});