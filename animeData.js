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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NekoStream - Watch Anime Free</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <div class="logo">NekoStream</div>
    <div class="search-box">
      <input type="text" placeholder="Search anime..." />
    </div>
  </header>

  <section class="anime-grid">
    <!-- Anime Cards Start -->
    <a class="anime-card" href="https://gogoanimehd.io/category/one-piece" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/6/73245.jpg" alt="One Piece" />
      <h3>One Piece</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/naruto" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/13/17405.jpg" alt="Naruto" />
      <h3>Naruto</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/demon-slayer-kimetsu-no-yaiba" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg" alt="Demon Slayer" />
      <h3>Demon Slayer</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/jujutsu-kaisen-tv" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/1171/109222.jpg" alt="Jujutsu Kaisen" />
      <h3>Jujutsu Kaisen</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/attack-on-titan" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" alt="Attack on Titan" />
      <h3>Attack on Titan</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/death-note" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/9/9453.jpg" alt="Death Note" />
      <h3>Death Note</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/bleach" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/3/40451.jpg" alt="Bleach" />
      <h3>Bleach</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/fullmetal-alchemist-brotherhood" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/1223/96541.jpg" alt="FMAB" />
      <h3>FMA: Brotherhood</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/my-hero-academia" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/10/78745.jpg" alt="My Hero Academia" />
      <h3>My Hero Academia</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/tokyo-ghoul" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/5/64449.jpg" alt="Tokyo Ghoul" />
      <h3>Tokyo Ghoul</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/hunter-x-hunter-2011" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/1337/99013.jpg" alt="Hunter x Hunter" />
      <h3>Hunter x Hunter</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/black-clover" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/2/88336.jpg" alt="Black Clover" />
      <h3>Black Clover</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/dragon-ball-z" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/6/20936.jpg" alt="Dragon Ball Z" />
      <h3>Dragon Ball Z</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/vinland-saga" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/1500/103005.jpg" alt="Vinland Saga" />
      <h3>Vinland Saga</h3>
    </a>

    <a class="anime-card" href="https://gogoanimehd.io/category/spy-x-family" target="_blank">
      <img src="https://cdn.myanimelist.net/images/anime/1908/122169.jpg" alt="Spy x Family" />
      <h3>Spy x Family</h3>
    </a>
    <!-- Anime Cards End -->
  </section>

  <footer>
    &copy; 2025 NekoStream. All rights reserved.
  </footer>
</body>
</html>
