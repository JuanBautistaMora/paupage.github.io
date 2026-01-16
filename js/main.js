(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;

  const setExpanded = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('active', open);
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setExpanded(open);
  });

  // Close on click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setExpanded(false));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    const target = e.target;
    const isClickInside = menu.contains(target) || toggle.contains(target);
    if (!isClickInside) setExpanded(false);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setExpanded(false);
  });
})();
