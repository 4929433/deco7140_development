// js/login.js
import { fetchGetData } from './modules/getData.js';

const modal    = document.getElementById("loginModal");
const openBtn  = document.getElementById("openLogin");
const iconBtn  = document.getElementById("iconLogin");
const closeBtn = document.getElementById("closeLogin");

openBtn?.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "flex";
});
iconBtn?.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "flex";
});
closeBtn?.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

document.getElementById("loginForm")?.addEventListener("submit", async e => {
  e.preventDefault();
  const emailInput    = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const errorDiv      = document.getElementById("loginError");

  const identifier = emailInput.value.trim();   
  const password   = passwordInput.value.trim(); 

  errorDiv.textContent = "";

  if (!identifier || !password) {
    errorDiv.textContent = "Please enter both email/username and password.";
    return;
  }
  if (identifier.includes("@")) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(identifier)) {
      errorDiv.textContent = "Please enter a valid email address.";
      return;
    }
  }

  try {
    // —— 拉取社区所有注册用户 —— 
    const users = await fetchGetData(
      "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
      {
        student_number: "s4929433",
        uqcloud_zone_id: "64e84824"
      }
    );
    if (!Array.isArray(users)) {
      throw new Error("Unable to fetch user list.");
    }

    // —— 在列表中匹配邮箱/用户名 + 密码 —— 
    const me = users.find(u =>
      (u.email === identifier || u.name === identifier)
      && u.password === password
    );
    if (!me) {
      errorDiv.textContent = "Invalid email/username or password.";
      return;
    }

    // —— 登录成功，写入 localStorage —— 
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", me.name);
    localStorage.setItem("avatar", me.avatar_url || "images/default-avatar.png");

    // 关闭弹窗并刷新，让 auth.js 重新渲染导航栏
    modal.style.display = "none";
    window.location.reload();

  } catch (err) {
    console.error(err);
    errorDiv.textContent = err.message || "Network or server error.";
  }
});

// 页面加载时，如果 register.html 那里 set 了 triggerLoginOnLoad，就自动打开弹窗
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("triggerLoginOnLoad") === "true") {
    modal.style.display = "flex";
    localStorage.removeItem("triggerLoginOnLoad");
  }
});

