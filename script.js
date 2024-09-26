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
    const fadeInElements = document.querySelectorAll('.fade-in');
    const skillsSection = document.getElementById('skills');
    const skills = document.querySelectorAll('.progreso');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target.id === 'skills') {
                    skills.forEach(skill => {
                        const width = skill.style.width;
                        skill.style.setProperty('--width', width);
                        skill.classList.add('animated');
                    });
                }
            } else {
                entry.target.classList.remove('visible');

                if (entry.target.id === 'skills') {
                    skills.forEach(skill => {
                        skill.classList.remove('animated');
                    });
                }
            }
        });
    }, {
        rootMargin: '0px 0px -100px 0px'  
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
    observer.observe(skillsSection); 
});

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    menuVisible = !menuVisible;
    nav.classList.toggle("responsive", menuVisible);
    nav.classList.toggle("active", menuVisible);
}