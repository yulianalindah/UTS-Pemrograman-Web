/* TAMPILKAN MENU */
const tampilkanMenu = (idToggle, idNav) => {
    const toggle = document.getElementById(idToggle),
          nav = document.getElementById(idNav);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('tampil'); // Toggle kelas 'tampil'
        });
    }
};
tampilkanMenu('nav-toggle', 'nav-menu');

/* HAPUS MENU */
const navLink = document.querySelectorAll('.nav__link');

function aksiLink() {
    const navMenu = document.getElementById('nav-menu');
    // Saat klik setiap nav__link, kelas 'tampil' dihapus
    navMenu.classList.remove('tampil');
}
navLink.forEach(n => n.addEventListener('click', aksiLink));

/* TAUTAN AKTIF SAAT SCROLL */
const sections = document.querySelectorAll('section[id]');

const scrollAktif = () => {
    const posisiScroll = window.scrollY;

    sections.forEach(sekarang => {
        const tinggiSection = sekarang.offsetHeight,
              posisiSection = sekarang.offsetTop - 58,
              idSection = sekarang.getAttribute('id'),
              kelasSection = document.querySelector('.nav__menu a[href*=' + idSection + ']');

        if (posisiScroll > posisiSection && posisiScroll <= posisiSection + tinggiSection) {
            kelasSection.classList.add('tautan-aktif');
        } else {
            kelasSection.classList.remove('tautan-aktif');
        }
    });
};
window.addEventListener('scroll', scrollAktif);

/* ANIMASI SCROLL REVEAL */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true // Jika ingin animasi berulang setiap scroll, hapus komentar
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav__link');
  
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
  
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === currentSection) {
        link.classList.add('active');
      }
    });
  });
  