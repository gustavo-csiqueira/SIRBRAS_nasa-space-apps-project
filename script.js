// script.js - Animações de surgimento dinâmica para sections

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.feature .text-block');

  // Função para aplicar transição via JS
  function animateShow(el) {
    el.style.transition = 'opacity 2s cubic-bezier(.86,0,.07,1), transform 2s cubic-bezier(.86,0,.07,1), filter 2s cubic-bezier(.86,0,.07,1)';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0) scale(1)';
    el.style.filter = 'blur(0)';
  }
  function animateHide(el) {
    el.style.transition = 'opacity 2s cubic-bezier(.86,0,.07,1), transform 2s cubic-bezier(.86,0,.07,1), filter 2s cubic-bezier(.86,0,.07,1)';
    el.style.opacity = '0';
    el.style.transform = 'translateY(60px) scale(0.98)';
    el.style.filter = 'blur(8px)';
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateShow(entry.target);
      } else {
        animateHide(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => {
    // Estado inicial
    section.style.opacity = '0';
    section.style.transform = 'translateY(60px) scale(0.98)';
    section.style.filter = 'blur(8px)';
    observer.observe(section);
  });
});
