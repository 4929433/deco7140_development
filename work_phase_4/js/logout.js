document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      localStorage.removeItem('avatar');
      window.location.reload();
    });
  }
});
  document.addEventListener('DOMContentLoaded', () => {
    const authGroup = document.querySelector('.auth-group');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');
    const avatar = localStorage.getItem('avatar');

    if (authGroup) {
      if (isLoggedIn && username) {
        authGroup.innerHTML = `
          <div class="user-info" style="display: flex; align-items: center; gap: 0.5rem;">
            <img src="${avatar || 'images/default-avatar.png'}" alt="Avatar" style="width: 32px; height: 32px; border-radius: 50%;" />
            <span style="font-size: 0.9rem;">${username}</span>
            <button id="logoutBtn" class="auth-link" style="margin-left: 0.75rem; background: none; border: none; color: #f8fafc; cursor: pointer;">Logout</button>
          </div>
        `;
      } else {
        authGroup.innerHTML = `
          <a href="#" class="auth-icon-wrapper" aria-label="Login Icon" id="iconLogin">
            <svg class="auth-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
            </svg>
          </a>
          <a href="#" class="auth-link" id="openLogin">Login</a>
          <span class="divider">|</span>
          <a href="register.html" class="auth-link">Register</a>
        `;
      }
    }
  });