// EXPRESIONES REGULARES
expresiones=[
    /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/, // Nombre
    /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/, // Apellidos
    /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, // Email
    /^[0-9]{9}$/, // Phone
]

// TEXTO ERROR DE PATRÓN
wrongPatternText = [
    "El nombre solo puede contener letras",
    "Los apellidos solo puede contener letras",
    "Ejemplo de email: email@email.com",
    "Ejemplo de teléfono: 654545454",
]

// FUNCIÓN COMPROBAR EXPRESIÓN
function checkExpr(e, expr, wrongText, wrongTextP){
    expresion = new RegExp(expr)
    if(expresion.test(e.target.value) == false){
        e.target.style.borderBottom = "2px solid red";
        wrongTextP.innerHTML = wrongText;
        wrongTextP.style.display = "block";
    }else{
        e.target.style.borderBottom = "2px solid lime";
        wrongTextP.style.display = "none";
    }
}

// FUNCIÓN COMPROBAR CAMPOS VACÍOS
function checkInputs(){
    for(input of document.getElementsByClassName("mainInput")){
        if(input.value == ""){
            wrongTextP.innerHTML = "No puedes dejar campos vacíos.";
        }
    }
}

var animatedElement = document.getElementsByClassName("animated");

// FUNCIÓN MOSTRAR SECCIONES
function showSection(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animatedElement.length; i++){
        let height = animatedElement[i].offsetTop;
        if(height - 650 < scrollTop){
            animatedElement[i].style.opacity = 1;
            animatedElement[i].classList.add("moveUp");
        }
    }
}


window.onload = ()=>{
    // MOSTRAR Y OCULTAR MENÚ
    const menuIcon = document.getElementById('menu--icon');
    const menuNav = document.querySelector('.header--nav');
    const menuLines = document.getElementsByClassName('line');

    menuIcon.addEventListener("click", ()=>{
        menuNav.classList.toggle("openMenu");
        menuLines[0].classList.toggle("first_line");
        menuLines[1].classList.toggle("second_line");
        menuLines[2].classList.toggle("last_line");
    })

    for(let i=0; i < document.getElementsByClassName("header--nav--link").length; i++){
        document.getElementsByClassName("header--nav--link")[i].addEventListener("click", ()=>{
            menuNav.classList.toggle("openMenu");
            menuLines[0].classList.toggle("first_line");
            menuLines[1].classList.toggle("second_line");
            menuLines[2].classList.toggle("last_line");
        })
    }

    // MOSTRAR Y OCULTAR ASIDE
    const rightArrow = document.getElementById("imgright");
    const aside = document.getElementsByTagName("aside")[0];

    rightArrow.addEventListener("click", ()=>{
        aside.classList.toggle("showAside");
        rightArrow.classList.toggle("rotateArrow");
    })

    // VALIDACIÓN DE FORMULARIO
    formulario = document.getElementById("contactForm");
    formulario.addEventListener("submit", (e)=>{e.preventDefault()});
    formulario.addEventListener("submit", checkInputs);
    inputs = document.querySelectorAll(".mainInput");
    wrongTextP = document.getElementsByClassName("wrongText");
    for(let i=0; i < expresiones.length; i++){
        inputs[i].addEventListener("keyup", (e)=>{checkExpr(e, expresiones[i], wrongPatternText[i], wrongTextP[i])})
    }

    window.addEventListener("scroll", showSection);
}