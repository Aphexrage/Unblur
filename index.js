// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.innerHTML = nav.classList.contains('active') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Scroll suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    }
  });
});

// Header com scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.padding = '0.8rem 5%';
    header.classList.add('header-scrolled');
  } else {
    header.style.padding = '1.2rem 5%';
    header.classList.remove('header-scrolled');
  }
});

// Chatbot
const toggler = document.getElementById('goibot-toggler');
const closeBtn = document.getElementById('goibot-close');
const frame = document.getElementById('goibot-frame');

toggler.addEventListener('click', () => {
  frame.hidden = false;
  frame.classList.toggle('visible');
  toggler.classList.toggle('rotated');
  toggler.innerHTML = frame.classList.contains('visible') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-comments"></i>';
});

closeBtn.addEventListener('click', () => {
  frame.classList.remove('visible');
  toggler.classList.remove('rotated');
  toggler.innerHTML = '<i class="fas fa-comments"></i>';
  
  setTimeout(() => {
    frame.hidden = true;
  }, 250);
});