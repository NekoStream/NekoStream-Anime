// script.js
document.getElementById('searchInput').addEventListener('input', function () {
  const keyword = this.value.toLowerCase();
  const cards = document.querySelectorAll('.anime-card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(keyword) ? 'block' : 'none';
  });
});
