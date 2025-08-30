// Mobile menu toggle + footer year
document.getElementById('menuBtn')?.addEventListener('click', () => {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('hidden');
});
document.getElementById('year').textContent = new Date().getFullYear();