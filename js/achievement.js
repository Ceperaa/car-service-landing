document.addEventListener("DOMContentLoaded", function () {
    const achievementsSection = document.getElementById("achievements");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    achievementsSection.classList.add("in-view");
                }
            });
        },
        { threshold: 0.3 }
    );
    observer.observe(achievementsSection);
});