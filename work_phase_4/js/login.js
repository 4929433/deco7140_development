// js/login.js
document.addEventListener('DOMContentLoaded', () => {
  const modal      = document.getElementById('loginModal');
  const openBtn    = document.getElementById('openLogin');
  const iconBtn    = document.getElementById('iconLogin');
  const closeBtn   = document.getElementById('closeLogin');
  const form       = document.getElementById('loginForm');
  const emailIn    = document.getElementById('loginEmail');
  const pwdIn      = document.getElementById('loginPassword');
  const errorDiv   = document.getElementById('loginError');

  if (!modal || !form) return;

  // 打开弹窗
  [openBtn, iconBtn].forEach(btn => {
    btn?.addEventListener('click', e => {
      e.preventDefault();
      modal.style.display = 'flex';
    });
  });
  // 关闭按钮 & 点击空白区关闭
  closeBtn?.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const idf = emailIn.value.trim();
    const pwd = pwdIn.value.trim();
    errorDiv.textContent = '';

    if (!idf || !pwd) {
      errorDiv.textContent = 'Please enter both email/username and password.';
      return;
    }

    // 从 localStorage 取出注册时存的
    const storedEmail    = localStorage.getItem('email')    || '';
    const storedUserName = localStorage.getItem('username') || '';
    const storedPwd      = localStorage.getItem('password') || '';

    // 校验
    if ((idf === storedEmail || idf === storedUserName) && pwd === storedPwd) {
      localStorage.setItem('isLoggedIn', 'true');
      modal.style.display = 'none';
      window.location.reload();
    } else {
      errorDiv.textContent = 'Invalid email/username or password.';
    }
  });

  // 如果从注册页跳回首页时设置了弹窗 flag
  if (localStorage.getItem('triggerLoginOnLoad') === 'true') {
    modal.style.display = 'flex';
    localStorage.removeItem('triggerLoginOnLoad');
  }
});


