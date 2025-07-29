const animeContainer = document.getElementById('anime-container');
animeList.forEach(anime => {
  const card = document.createElement('div');
  card.classList.add('anime-card');
  card.innerHTML = `
    <a href="${anime.link}" target="_blank">
      <img src="${anime.image}" alt="${anime.title}">
      <h3>${anime.title}</h3>
    </a>
  `;
  animeContainer.appendChild(card);
});
