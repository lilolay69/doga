document.addEventListener('DOMContentLoaded', function() {
    console.log('DOGGA v1.0 - Iniciando...');

    const toggleNav = document.querySelector('.nav-toggle');
    const menuNav = document.querySelector('.nav-menu');

    if (toggleNav) {
        toggleNav.addEventListener('click', function() {
            if (menuNav.style.display === 'block') {
                menuNav.style.display = 'none';
            } else {
                menuNav.style.display = 'block';
                menuNav.style.position = 'absolute';
                menuNav.style.top = '60px';
                menuNav.style.left = '0';
                menuNav.style.width = '100%';
                menuNav.style.background = 'white';
                menuNav.style.padding = '20px';
            }
        });
    }
});