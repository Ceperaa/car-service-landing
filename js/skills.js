document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.getElementById("skills");

    function handleScroll() {
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            skillsSection.classList.add("active");
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
