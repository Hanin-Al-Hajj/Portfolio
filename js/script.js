
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skills-grid, .project-card, .contact-grid, .contact-form-wrap, .skill-card').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});


const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.style.opacity = link.getAttribute('href') === '#' + current ? '1' : '0.6';
    });
});


const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.style.getPropertyValue('--w');
            entry.target.style.transition = 'width 1.5s ease';
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-fill').forEach(bar => {
    bar.style.width = '0%';
    skillObserver.observe(bar);
});


const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.submit-btn');
        const original = btn.innerHTML;
        btn.innerHTML = 'Sent! ✦';
        btn.style.background = '#3d5a47';
        setTimeout(() => { btn.innerHTML = original; btn.style.background = ''; form.reset(); }, 3000);
    });
}


const cvBtn = document.getElementById('cvBtn');
if (cvBtn) {
    cvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('CV will be available soon! 🎨');
    });
}


window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) hero.style.backgroundPositionY = `calc(center + ${window.scrollY * 0.4}px)`;
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 80) {
        header.style.background = 'rgba(26, 20, 16, 0.85)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
    }
});