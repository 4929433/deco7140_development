const modal = document.getElementById("loginModal");
const openBtn = document.getElementById("openLogin");
const iconBtn = document.getElementById("iconLogin");  
const closeBtn = document.getElementById("closeLogin");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

iconBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const errorDiv = document.getElementById("loginError");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();


  errorDiv.textContent = "";


  if (!email || !password) {
    errorDiv.textContent = "Please enter both email/username and password.";
    return;
  }

 
  if (email.includes("@")) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorDiv.textContent = "Please enter a valid email address.";
      return;
    }
  }

  // ✅ 模拟成功（这里可以替换为实际提交逻辑）
  alert("Login successful!");
  document.getElementById("loginModal").style.display = "none";
});

document.addEventListener('DOMContentLoaded', () => {
  const trigger = localStorage.getItem('triggerLoginOnLoad');
  if (trigger === 'true') {
    const modal = document.getElementById('loginModal');
    if (modal) {
      modal.style.display = 'flex';
    }
    localStorage.removeItem('triggerLoginOnLoad');
  }
});
