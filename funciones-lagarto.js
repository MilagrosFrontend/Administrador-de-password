// Funciones Lagarto 😎!

function c(elem)
{return document.createElement(elem);}  // Crea nodos

function q(elem)
{return document.querySelector(elem);}  // Busca por selector

function qa(elem)
{return document.querySelectorAll(elem);}  // Busca todas las coincidencias por selector

function i(elem)
{return document.getElementById(elem)}  // Busca por id

function mostrarCategorias() { // oculta o muestra componentes
    let botonMenu = q(".mobile-menu")
    botonMenu.classList.toggle("ocultar")
}