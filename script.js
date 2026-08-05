const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const quoteForm = document.querySelector('#quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const project = String(data.get('project') || '').trim();
    const growing = String(data.get('growing') || '').trim();
    const details = String(data.get('details') || '').trim();

    const subject = encodeURIComponent(`Garden inquiry from ${name || 'a Tampa Bay neighbor'}`);
    const body = encodeURIComponent([
      'Hi Tyler and Amanda,',
      '',
      `My name: ${name}`,
      `My email: ${email}`,
      `I am interested in: ${project}`,
      `I would like to grow: ${growing || 'Not sure yet'}`,
      '',
      'My space and goal:',
      details,
      '',
      'I can attach photos of the space to this email.',
      '',
      'Thanks!'
    ].join('\n'));

    window.location.href = `mailto:hello@thefarmersbrown.com?subject=${subject}&body=${body}`;
  });
}
