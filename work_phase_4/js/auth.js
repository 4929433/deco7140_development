
import { postFormData } from './modules/postFormData.js';

document.addEventListener('DOMContentLoaded', () => {
  const form          = document.getElementById('community-form');
  const feedback      = document.getElementById('form-feedback');
  const avatarInput   = document.getElementById('avatar');
  const avatarPreview = document.getElementById('avatarPreview');

  if (!form) return;


  avatarInput?.addEventListener('change', () => {
    const file = avatarInput.files[0];
    if (file) {
      avatarPreview.src = URL.createObjectURL(file);
      avatarPreview.style.display = 'block';
    }
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    feedback.textContent = 'Submitting…';
    feedback.style.color = '';

    const { success, data } = await postFormData(
      form,
      'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/',
      {
        student_number: 's4929433',
        uqcloud_zone_id: '64e84824',
      }
    );

    if (success) {
     
      const username = form.name.value.trim();
      const email    = form.email.value.trim();
      const pwd      = form.password.value;
      const avatarUrl = data.avatar_url || avatarPreview.src || '';

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username',   username);
      localStorage.setItem('email',      email);
      localStorage.setItem('password',   pwd);
      localStorage.setItem('avatar',     avatarUrl);

     
      localStorage.setItem('triggerLoginOnLoad', 'true');

   
      window.location.href = 'index.html';
    } else {
      feedback.textContent = data.message || 'Registration failed.';
      feedback.style.color = '#f87171';
    }
  });
});


