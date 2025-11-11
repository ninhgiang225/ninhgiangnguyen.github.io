// Small helpers for contact form + UI bits
document.getElementById('year').textContent = new Date().getFullYear();

function sendMail(ev) {
  ev.preventDefault();
  const form = ev.target;
  const name = encodeURIComponent(form.name.value || '');
  const email = encodeURIComponent(form.email.value || '');
  const msg = encodeURIComponent(form.message.value || '');
  const subject = encodeURIComponent(`Contact from portfolio: ${name}`);
  const body = encodeURIComponent(`From: ${name} <${email}>\n\n${decodeURIComponent(msg)}`);

  // open default mail client
  window.location.href = `mailto:ngnguy26@colby.edu?subject=${subject}&body=${body}`;
  return false;
}

function copyEmail() {
  const email = 'ngnguy26@colby.edu';
  navigator.clipboard?.writeText(email).then(() => {
    alert('Email copied to clipboard: ' + email);
  }, () => {
    prompt('Copy this email:', email);
  });
}

// Small progressive enhancement: smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


function initProjectSlider() {
  let index = 0;
  const grid = document.querySelector('.projects-grid');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  if (!grid || !nextBtn || !prevBtn) return;

  const cardWidth = 260 + 24; // card width + gap

  nextBtn.addEventListener('click', () => {
    index++;
    grid.style.transform = `translateX(-${index * cardWidth}px)`;
  });

  prevBtn.addEventListener('click', () => {
    index = Math.max(0, index - 1);
    grid.style.transform = `translateX(-${index * cardWidth}px)`;
  });
}

// Run after page loads
document.addEventListener('DOMContentLoaded', initProjectSlider);

