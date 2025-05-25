
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


  [openBtn, iconBtn].forEach(btn => {
    btn?.addEventListener('click', e => {
      e.preventDefault();
      modal.style.display = 'flex';
    });
  });

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

    const storedEmail    = localStorage.getItem('email')    || '';
    const storedUserName = localStorage.getItem('username') || '';
    const storedPwd      = localStorage.getItem('password') || '';

 
    if ((idf === storedEmail || idf === storedUserName) && pwd === storedPwd) {
      localStorage.setItem('isLoggedIn', 'true');
      modal.style.display = 'none';
      window.location.reload();
    } else {
      errorDiv.textContent = 'Invalid email/username or password.';
    }
  });

  if (localStorage.getItem('triggerLoginOnLoad') === 'true') {
    modal.style.display = 'flex';
    localStorage.removeItem('triggerLoginOnLoad');
  }
});


