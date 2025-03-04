// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Typing effect
const texts = ['Desenvolvedor Web', 'Administrador de Redes', 'Estudante de TI'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById('typing-text').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000);
  } else {
    setTimeout(type, 100);
  }
}

// Start typing effect
type();

// Theme toggle
const themeButton = document.getElementById('theme-toggle');
const darkTheme = 'dark-theme';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');

// Validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  // Save the theme to localStorage
  localStorage.setItem('selected-theme', document.body.classList.contains(darkTheme) ? 'dark' : 'light');
});

// Show scroll up button
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// Form validation
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactMessage = document.getElementById('contact-message');

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate fields
  if (contactName.value.trim() === '') {
    alert('Por favor, insira seu nome');
    return;
  }

  if (!validateEmail(contactEmail.value)) {
    alert('Por favor, insira um email válido');
    return;
  }

  if (contactMessage.value.trim() === '') {
    alert('Por favor, insira sua mensagem');
    return;
  }

  // If validation passes, you can submit the form
  alert('Mensagem enviada com sucesso!');
  contactForm.reset();
});