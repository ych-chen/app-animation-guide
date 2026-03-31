// Sidebar toggle
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function toggleSidebar() {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
}
if (menuBtn) { menuBtn.addEventListener('click', toggleSidebar); }
if (overlay) { overlay.addEventListener('click', toggleSidebar); }

// Copy buttons
document.querySelectorAll('pre').forEach(pre => {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.textContent = 'Copy';
  btn.addEventListener('click', () => {
    const code = pre.querySelector('code');
    navigator.clipboard.writeText(code ? code.textContent : pre.textContent).then(() => {
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = 'Copy', 1500);
    });
  });
  pre.appendChild(btn);
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-on-scroll').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = '.fade-on-scroll.visible { opacity: 1; transform: translateY(0); }';
document.head.appendChild(style);
