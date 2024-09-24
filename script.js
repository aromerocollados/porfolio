let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("pascal");
        habilidades[1].classList.add("htmlcssjs");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("bbdd");
        habilidades[4].classList.add("cs");
        habilidades[5].classList.add("kotlin");
        habilidades[6].classList.add("git");
        habilidades[7].classList.add("spring");
        habilidades[8].classList.add("python");
        habilidades[9].classList.add("vscode");
    }
}

window.onscroll = function(){
    efectoHabilidades();
} 