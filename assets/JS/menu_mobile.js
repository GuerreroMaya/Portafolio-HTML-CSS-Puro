document.addEventListener("DOMContentLoaded", (event) => {

    // SELECCIONAR MIS DOS ELEMENTOS PRINCIPALES
    let mobile_btn =  document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    // FUNCIÓN MOSTRAR Y OCULTAR MENÚ RESPOSIVE
    const showHiddenMenu = () => {
        let show = document.querySelector(".menu-mobile--show");

        if(show){
            mobile_menu.classList.remove("menu-mobile--show");
        }else{
            mobile_menu.classList.add("menu-mobile--show");
        }
    }

    // AL DAR CLICK AL BOTÓN DE HAMBURGUESA MOSTRAR EL MENÚ DE NAVEGACIÓN RESPONSIVE
    mobile_btn.addEventListener("click", showHiddenMenu);

    // AL REDIMENSIONAR LA PANTALLA, OCULTAR EL MENÚ SEGÚN LOS MEDIA QUERIES
    window.addEventListener("resize", () => {
        let window_width = parseInt(document.body.clientWidth);

        if(window_width >= 1000){
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });

    // UTILIZAR EL BOTÓN X PARA CERRAR EL MENÚ RESPONSIVE
    let btn_close = document.querySelector(".menu-mobile__close");

    btn_close.addEventListener("click", showHiddenMenu);

    // DESPLEGAR SUBMENÚS

    let menu_item = document.querySelectorAll(".menu-mobile__item");

    menu_item.forEach(item => {

        item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild;

            if(submenu.className === "menu-mobile__submenu-mobile"){
                if(submenu.style.display === "block"){
                    submenu.style.display = "none";
                }else{
                    submenu.style.display = "block";
                }
            }
        });

    });

});