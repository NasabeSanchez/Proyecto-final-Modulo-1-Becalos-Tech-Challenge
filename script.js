// Seleccionar la barra de navegación
const navbar = document.querySelector('.navbar');

// Escuchar el evento de desplazamiento
window.addEventListener('scroll', () => {
    // Añadir o quitar la clase 'scrolled' dependiendo de la posición del scroll
    if (window.scrollY > 50) { // Si el scroll es mayor a 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
