let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    const skills = document.querySelectorAll('.progreso');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skills.forEach(skill => {
                    const width = skill.style.width;
                    skill.style.setProperty('--width', width);
                    skill.classList.add('animated');
                });
                observer.disconnect();
            }
        });
    });

    observer.observe(skillsSection);
});