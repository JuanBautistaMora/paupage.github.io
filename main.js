document.addEventListener('DOMContentLoaded', () => {
  // menú móvil
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('active');
    });
  }

  // slider testimonios
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  const show = i => {
    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === i);
      s.setAttribute('aria-hidden', idx !== i);
    });
  };
  show(index);
  document.querySelector('.next')?.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    show(index);
  });
  document.querySelector('.prev')?.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    show(index);
  });

  // acordeón FAQ
  document.querySelectorAll('.accordion .item button').forEach(btn => {
    const content = btn.nextElementSibling;
    content.hidden = true;
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      content.hidden = expanded;
    });
  });

  // validación formulario
  const form = document.querySelector('.contact-form');
  form?.addEventListener('submit', e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
    }
    // sendViaEmailJS(form);
  });

  // año dinámico
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});

/*
function sendViaEmailJS(form) {
  // TODO: Integrar con EmailJS
}
*/

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', (!expanded).toString());
    menu.classList.toggle('active');
  });
});

