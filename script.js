const texts = [
  "Web Designer",
  "FCAI -RST Student",
  "Front-end Developer"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const speed = 150; 

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById('animated-text').textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, speed);
  }
})();


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Active nav link highlighting
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
  
  // Also update mobile menu links
  const mobileLinks = document.querySelectorAll('.offcanvas .nav-link');
  mobileLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Add hover effects to cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = '0 10px 25px rgba(255, 255, 255, 0.15)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 4px 6px rgba(255, 255, 255, 0.1)';
  });
});

// Add animations to timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`;
});

// Add fade-in animations to section titles
document.querySelectorAll('.section-title').forEach((title, index) => {
  title.style.animationDelay = `${index * 0.3}s`;
});

// Close mobile menu when clicking a link
document.querySelectorAll('.offcanvas .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('mobileMenu'));
    offcanvas.hide();
  });
});