window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const header = document.querySelector('header');
    const headerContainer = document.querySelector('.header-container');
    
    menuButton.addEventListener('click', function (event) {
        event.preventDefault();
        headerContainer.classList.toggle('menu-visible');
        header.classList.toggle('menu-visible');
    });
});

document.getElementById('menuButton').addEventListener('click', function() {
    var homeButton = document.getElementById('homeButton');
    var infoBox = document.getElementById('infoBox');
    
    if (homeButton.style.display === 'none') {
        // Si el botón Home está oculto, mostrarlo y ocultar el cuadro de texto
        homeButton.style.display = 'inline-block';
        infoBox.style.display = 'none';
    } else {
        // Si el botón Home está visible, ocultarlo y mostrar el cuadro de texto
        homeButton.style.display = 'none';
        infoBox.style.display = 'block';
    }
});

window.addEventListener('scroll', function() {
    var photo = document.querySelector('.profile-photo2');
    var description = document.querySelector('.description2');
    var scrollPosition = window.scrollY;
    
    // Ajusta estos valores para obtener el efecto deseado
    var photoOffset = scrollPosition * 0.5;
    var descriptionOffset = scrollPosition * -0.5;

    photo.style.transform = `translateY(${photoOffset}px)`;
    description.style.transform = `translateY(${descriptionOffset}px)`;
});


