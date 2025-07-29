// script.js
document.getElementById('searchInput').addEventListener('input', function () {
  const keyword = this.value.toLowerCase();
  const cards = document.querySelectorAll('.anime-card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(keyword) ? 'block' : 'none';
  });
});
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-box input");
  const cards = document.querySelectorAll(".anime-card");

  searchInput.addEventListener("keyup", () => {
    const term = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(term) ? "block" : "none";
    });
  });
});
