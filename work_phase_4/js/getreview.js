import { fetchGetData } from './modules/getData.js';

async function renderCommunityReviews() {
  const reviews = await fetchGetData(
    'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/',
    {
      student_number: 's4929433',
      uqcloud_zone_id: '64e84824',
    }
  );

  const container = document.getElementById('review-list');
  container.innerHTML = '';

  reviews.forEach(review => {
 if (!review.name || !review.message) return;


    const card = document.createElement('div');
    card.className = 'review-card';

const [firstLine, ...restLines] = review.message.split('\n');
const gameLine = `🎮 ${firstLine}`;
const commentText = restLines.join('<br>');

card.innerHTML = `
  <p><strong>User:</strong> ${review.name}</p>
  <p>${gameLine}</p>
  <p>${commentText}</p>
`;

    container.appendChild(card);
  });
}

window.addEventListener('DOMContentLoaded', renderCommunityReviews);
