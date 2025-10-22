/**
 * Fichier JavaScript pour les interactions et animations
 */

document.addEventListener('DOMContentLoaded', () => {

    // ** 1. Gestion du Menu Mobile (Hamburger) **
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        // Toggle la classe 'active' pour afficher/cacher la navigation
        menuIcon.classList.toggle('fa-xmark'); // Change l'icône de burger à 'X'
        navbar.classList.toggle('active');
    };

    // Fermer le menu après un clic de navigation
    document.querySelectorAll('.navbar a').forEach(link => {
        link.onclick = () => {
            // S'assurer que le menu se ferme sur mobile après le clic
            if (navbar.classList.contains('active')) {
                 menuIcon.classList.remove('fa-xmark');
                 navbar.classList.remove('active');
            }
        };
    });


    // ** 2. Navigation Active au Scroll **
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150; // Ajustement de l'offset pour un meilleur déclenchement
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                // Supprimer 'active' partout
                navLinks.forEach(links => {
                    links.classList.remove('active');
                });
                // Ajouter 'active' au lien correspondant
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            };
        });
    };


    // ** 3. Animations Légères avec ScrollReveal **
    // Assurez-vous d'avoir inclus <script src="https://unpkg.com/scrollreveal"></script> dans votre HTML
    
    // Configuration de base de ScrollReveal
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
        reset: true // Réinitialise l'animation à chaque scroll
    });

    // Animer les éléments de la section Accueil
    ScrollReveal().reveal('.accueil-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.accueil-img, .projet-card, .contact-form, .footer', { origin: 'bottom' });
    
    // Animer les éléments de gauche et de droite
    ScrollReveal().reveal('.accueil-content h1, .a-propos-text', { origin: 'left' });
    ScrollReveal().reveal('.accueil-content p, .competence-item', { origin: 'right', interval: 100 });
});