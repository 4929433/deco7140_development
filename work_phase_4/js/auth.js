// js/auth.js
import { postFormData } from './modules/postFormData.js';
import { fetchGetData }  from './modules/getData.js';

document.addEventListener('DOMContentLoaded', () => {
  // —— 1. 注册表单提交 & 自动登录 —— 
  const form          = document.getElementById('community-form');
  const feedback      = document.getElementById('form-feedback');
  const avatarInput   = document.getElementById('avatar');
  const avatarPreview = document.getElementById('avatarPreview');

  if (form) {
    // 头像预览
    avatarInput?.addEventListener('change', () => {
      const file = avatarInput.files[0];
      if (file) {
        avatarPreview.src = URL.createObjectURL(file);
        avatarPreview.style.display = 'block';
      } else {
        avatarPreview.style.display = 'none';
      }
    });

    form.addEventListener('submit', async e => {
      e.preventDefault();
      feedback.textContent = 'Submitting…';

      const { success, data } = await postFormData(
        form,
        'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/',
        {
          student_number: 's4929433',
          uqcloud_zone_id: '64e84824'
        }
      );

      if (success) {
        // 存后端返回的头像 URL（如果有），否则用 preview
        localStorage.setItem('avatar', data.avatar_url || avatarPreview.src || '');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', form.name.value);
        // 跳转到首页
        window.location.href = 'index.html';
      } else {
        feedback.textContent = data.message || 'Registration failed.';
        feedback.style.color = '#f87171';
      }
    });
  }

  // —— 2. 导航栏渲染 & 登录保护 & 登出 —— 
  const authGroup   = document.querySelector('.auth-group');
  const isLoggedIn  = localStorage.getItem('isLoggedIn') === 'true';
  const username    = localStorage.getItem('username');
  const avatar      = localStorage.getItem('avatar') || 'images/default-avatar.png';

  if (authGroup) {
    if (isLoggedIn && username) {
      authGroup.innerHTML = `
      <div class="user-info" style="display:flex;align-items:center;gap:0.5rem">
        <img src="${avatar}" alt="Avatar" style="width:32px;height:32px;border-radius:50%" />
        <span style="color:#f8fafc;">${username}</span>
        <button id="logoutBtn" class="auth-link" style="background:none;border:none;color:#f8fafc;cursor:pointer;">Logout</button>
      </div>`;
      document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.clear();
        window.location.reload();
      });
    } else {
      authGroup.innerHTML = `
      <a href="#" class="auth-link" id="openLogin">Login</a>
      <span class="divider">|</span>
      <a href="register.html" class="auth-link">Register</a>`;
    }
  }

  // —— 3. 登录弹窗控制 —— 
  const loginModal = document.getElementById('loginModal');
  const openLogin  = document.getElementById('openLogin');
  const iconLogin  = document.getElementById('iconLogin');
  const closeLogin = document.getElementById('closeLogin');

  openLogin?.addEventListener('click', e => {
    e.preventDefault();
    loginModal.style.display = 'flex';
  });
  iconLogin?.addEventListener('click', e => {
    e.preventDefault();
    loginModal.style.display = 'flex';
  });
  closeLogin?.addEventListener('click', () => {
    loginModal.style.display = 'none';
  });
  window.addEventListener('click', e => {
    if (e.target === loginModal) loginModal.style.display = 'none';
  });

  // —— 4. 社区页面登录保护 —— 
  if (location.pathname.endsWith('community.html') && !isLoggedIn) {
    localStorage.setItem('triggerLoginOnLoad', 'true');
    window.location.href = 'index.html';
  }

  // —— 5. 首页自动弹登录（来自注册跳转） —— 
  if (location.pathname.endsWith('index.html') && localStorage.getItem('triggerLoginOnLoad') === 'true') {
    loginModal.style.display = 'flex';
    localStorage.removeItem('triggerLoginOnLoad');
  }
});

