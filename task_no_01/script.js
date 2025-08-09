// Basic interactivity: mobile nav toggle, modal registration, smooth scroll, simple validations

document.addEventListener('DOMContentLoaded', () => {
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });

  // modal elements
  const modal = document.getElementById('modal');
  const openRegister = document.getElementById('openRegister');
  const openRegisterMobile = document.getElementById('openRegisterMobile');
  const closeModal = document.getElementById('closeModal');
  const cancelBtn = document.getElementById('cancelBtn');
  const ctaRegister = document.getElementById('ctaRegister');

  function showModal() {
    modal.classList.remove('hidden');
    modal.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }
  function hideModal() {
    modal.classList.add('hidden');
    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.getElementById('regMsg').classList.add('hidden');
    document.getElementById('registerForm').reset();
  }

  [openRegister, openRegisterMobile, ctaRegister].forEach(btn => {
    if (btn) btn.addEventListener('click', showModal);
  });
  [closeModal, cancelBtn].forEach(btn => {
    if (btn) btn.addEventListener('click', hideModal);
  });

  // registration form: basic validation and success notification
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    if (fullname.length < 3) {
      alert('Please enter your full name (min 3 characters).');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please provide a valid email address.');
      return;
    }

    // Simulate submission success
    document.getElementById('regMsg').classList.remove('hidden');
    setTimeout(() => {
      hideModal();
      alert('Thank you! Your registration was received.');
    }, 900);
  });

  // contact form simple handling
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for contacting Kohaq — we will get back to you soon.');
    contactForm.reset();
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      // close mobile nav when link clicked
      if (!link.classList.contains('nav-link')) mobileNav.classList.add('hidden');
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// small helper functions
function validateEmail(email) {
  // simple email regex (not exhaustive)
  return /\S+@\S+\.\S+/.test(email);
}

// helper used by Course "Register" buttons
function scrollToReg() {
  const el = document.getElementById('openRegister');
  if (el) el.click();
}
