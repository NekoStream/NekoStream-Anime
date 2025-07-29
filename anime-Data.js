const animeList = [
  {
    title: "One Piece",
    image: "https://img.hianime.to/cover/one-piece-1670327862.png",
    link: "https://hianime.to/watch/one-piece-100"
  },
  {
    title: "Naruto",
    image: "https://img.hianime.to/cover/naruto-1554786892.png",
    link: "https://hianime.to/watch/naruto-677"
  },
  {
    title: "Demon Slayer",
    image: "https://img.hianime.to/cover/demon-slayer-kimetsu-no-yaiba-1554788862.png",
    link: "https://hianime.to/watch/demon-slayer-kimetsu-no-yaiba-47"
  },
  {
    title: "Jujutsu Kaisen",
    image: "https://img.hianime.to/cover/jujutsu-kaisen-1602831662.png",
    link: "https://hianime.to/watch/jujutsu-kaisen-534"
  },
  {
    title: "Attack on Titan",
    image: "https://img.hianime.to/cover/attack-on-titan-1675655371.png",
    link: "https://hianime.to/watch/attack-on-titan-112"
  },
  {
    title: "Death Note",
    image: "https://img.hianime.to/cover/death-note-1678920435.png",
    link: "https://hianime.to/watch/death-note-60"
  },
  {
    title: "My Hero Academia",
    image: "https://img.hianime.to/cover/my-hero-academia-1670336790.png",
    link: "https://hianime.to/watch/my-hero-academia-322"
  },
  {
    title: "Chainsaw Man",
    image: "https://img.hianime.to/cover/chainsaw-man-1665482046.png",
    link: "https://hianime.to/watch/chainsaw-man-17406"
  },
  {
    title: "Tokyo Revengers",
    image: "https://img.hianime.to/cover/tokyo-revengers-1647377412.png",
    link: "https://hianime.to/watch/tokyo-revengers-15501"
  },
  {
    title: "Bleach: Thousand-Year Blood War",
    image: "https://img.hianime.to/cover/bleach-thousand-year-blood-war-1665477216.png",
    link: "https://hianime.to/watch/bleach-thousand-year-blood-war-17405"
  },
  {
    title: "Solo Leveling",
    image: "https://img.hianime.to/cover/solo-leveling-1705248755.png",
    link: "https://hianime.to/watch/solo-leveling-18848"
  },
  {
    title: "Black Clover",
    image: "https://img.hianime.to/cover/black-clover-1670327336.png",
    link: "https://hianime.to/watch/black-clover-2404"
  },
  {
    title: "Blue Lock",
    image: "https://img.hianime.to/cover/blue-lock-1665479103.png",
    link: "https://hianime.to/watch/blue-lock-17423"
  },
  {
    title: "Oshi no Ko",
    image: "https://img.hianime.to/cover/oshi-no-ko-1681304580.png",
    link: "https://hianime.to/watch/oshi-no-ko-18269"
  },
  {
    title: "Hunter x Hunter",
    image: "https://img.hianime.to/cover/hunter-x-hunter-2011-1578779337.png",
    link: "https://hianime.to/watch/hunter-x-hunter-2011-1140"
  },
  {
    title: "Dr. Stone",
    image: "https://img.hianime.to/cover/dr-stone-1578779306.png",
    link: "https://hianime.to/watch/dr-stone-1141"
  },
  {
    title: "Haikyuu!!",
    image: "https://img.hianime.to/cover/haikyuu-1578779292.png",
    link: "https://hianime.to/watch/haikyuu-1139"
  },
  {
    title: "Spy x Family",
    image: "https://img.hianime.to/cover/spy-x-family-1650050988.png",
    link: "https://hianime.to/watch/spy-x-family-15279"
  },
  {
    title: "Mob Psycho 100",
    image: "https://img.hianime.to/cover/mob-psycho-100-1578779188.png",
    link: "https://hianime.to/watch/mob-psycho-100-1129"
  },
  {
    title: "Vinland Saga",
    image: "https://img.hianime.to/cover/vinland-saga-1578779227.png",
    link: "https://hianime.to/watch/vinland-saga-1133"
  }
  // You can keep adding more anime like this. I can send more in batches of 20.
];

// Dynamically create anime cards in the container
const container = document.getElementById("anime-container");

animeList.forEach((anime) => {
  const card = document.createElement("div");
  card.className = "anime-card";
  card.innerHTML = `
    <img src="${anime.image}" alt="${anime.title}">
    <h3>${anime.title}</h3>
    <a href="${anime.link}" target="_blank">Watch Now</a>
  `;
  container.appendChild(card);
});
