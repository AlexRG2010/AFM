// Agrega funcionalidad para cerrar la barra de navegación en dispositivos móviles
'use strict';
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navList = document.querySelector("nav ul");

    navToggle.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});