
import { postFormData } from './modules/postFormData.js';

document.addEventListener('DOMContentLoaded', () => {
  const form     = document.getElementById('reviewForm');
  const feedback = document.createElement('div');
  feedback.className = 'form-feedback';
  form.appendChild(feedback);

  form.addEventListener('submit', async e => {
    e.preventDefault();
    feedback.textContent = 'Submitting…';
    feedback.style.color = '#f8fafc';

   
    const { success, data } = await postFormData(
      form,
      'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/',
      {
        student_number: 's4929433',
        uqcloud_zone_id: '64e84824'
      }
    );

    if (success) {
      feedback.textContent = data.message || 'Review submitted!';
      feedback.style.color = '#60a5fa';
      form.reset();
    } else {
      feedback.textContent = data.message || 'Submission failed.';
      feedback.style.color = '#f87171';
    }
  });
});

