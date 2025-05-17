// js/register.js
import { postFormData } from './modules/postFormData.js';

document.addEventListener('DOMContentLoaded', () => {
  const form          = document.getElementById('community-form');
  const feedback      = document.getElementById('form-feedback');
  const avatarInput   = document.getElementById('avatar');
  const avatarPreview = document.getElementById('avatarPreview');

  if (!form) return;

  // 头像本地预览
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
      // 存储用户信息到 localStorage
      const username = form.name.value.trim();
      const email    = form.email.value.trim();
      const pwd      = form.password.value;
      const avatarUrl = data.avatar_url || avatarPreview.src || '';

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username',   username);
      localStorage.setItem('email',      email);
      localStorage.setItem('password',   pwd);
      localStorage.setItem('avatar',     avatarUrl);

      // 如果想要注册成功后自动弹登录，可在此设置 flag
      localStorage.setItem('triggerLoginOnLoad', 'true');

      // 跳回首页
      window.location.href = 'index.html';
    } else {
      feedback.textContent = data.message || 'Registration failed.';
      feedback.style.color = '#f87171';
    }
  });
});


