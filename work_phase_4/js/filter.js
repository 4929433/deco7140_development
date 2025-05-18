const params = new URLSearchParams(location.search);
const keyword = params.get('keyword')?.toLowerCase() || '';
const platform = params.get('platform');
const year = params.get('year');
const minRating = parseFloat(params.get('minRating')) || 0;


fetch('5000.json')
  .then(res => res.json())
  .then(games => {
 const results = games.filter(game => {
  const nameMatch = game.name?.toLowerCase().includes(keyword);
      const platformMatch = !platform || game.platforms?.includes(platform);
      const yearMatch = !year || game.released?.startsWith(year);
      const ratingMatch = game.rating >= minRating;

      return nameMatch && platformMatch && yearMatch && ratingMatch;
    });

    renderResults(results.slice(0, 5)); 
  });

function renderResults(games) {
  const container = document.getElementById('filter-results');
  container.innerHTML = '';

  if (games.length === 0) {
    container.innerHTML = '<p>No matching games found.</p>';
    return;
  }

  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <a href="https://rawg.io/games/${game.slug}" target="_blank">
        <img src="${game.background_image}" alt="${game.name}">
        <h3>${game.name}</h3>
        <p><strong>Release:</strong> ${game.released}</p>
        <p><strong>Rating:</strong> ${game.rating}</p>
        <p><strong>Platforms:</strong> ${game.platforms.join(', ')}</p>
      </a>
    `;
    container.appendChild(card);
  });
}

