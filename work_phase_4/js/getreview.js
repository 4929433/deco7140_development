// js/getReviews.js
import { fetchGetData } from './modules/getData.js';

document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.getElementById('review-list');
  if (!listEl) return;


  fetchGetData(
    'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/',
    {
      student_number: 's4929433',
      uqcloud_zone_id: '64e84824'
    }
  ).then(data => {
    if (!data || data.length === 0) {
      listEl.innerHTML = '<p class="text-danger">Unable to load reviews.</p>';
      return;
    }

   
    listEl.innerHTML = '';

    data.forEach(member => {
  
      if (
        !member.name ||
        member.name.length < 3 ||
        !member.message ||
        member.message.length < 5 ||
        !isNaN(member.name)
      ) {
        return;
      }

      const card = document.createElement('div');
      card.className = 'review-card';

      card.innerHTML = `
        <div class="review-card__header">
          <div class="review-card__avatar">🎮</div>
          <h5 class="review-card__author">Username: ${member.name}</h5>
        </div>
        <p class="review-card__message">Review: ${member.message}</p>
      `;

      listEl.appendChild(card);
    });
  });
});
