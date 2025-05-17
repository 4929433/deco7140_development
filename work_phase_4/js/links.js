document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });


  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
 
    if (link.href === window.location.href) {
      link.classList.add("active");
    }


    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});


  document.querySelectorAll('.game-menu__trigger').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const menu = btn.parentElement;
      menu.classList.toggle('open');
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.game-menu')) {
      document.querySelectorAll('.game-menu.open')
              .forEach(m => m.classList.remove('open'));
    }
  });