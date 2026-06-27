// Reveal sections as they enter the viewport
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => observer.observe(section));

// Contact form placeholder behavior.
// Replace this with a real integration (Formspree, mailto, or your own backend)
// once your email is added to the contact section.
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('This form is not connected yet. Add your email in the Contact section and wire this up to a service like Formspree, or change the form to use a mailto: link.');
  });
}
