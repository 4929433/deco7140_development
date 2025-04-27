/**
 * 初始化手风琴折叠面板
 * @param {string} containerSelector - 折叠面板容器的选择器，比如 '.accordion'
 */
function initAccordion(containerSelector) {
    const accordions = document.querySelectorAll(containerSelector);
    accordions.forEach(container => {
      const headers = container.querySelectorAll('.accordion-header');
      headers.forEach(header => {
        header.addEventListener('click', () => {
          header.parentElement.classList.toggle('open');
        });
      });
    });
  }
  
  // 页面 DOM Ready 后自动初始化
  document.addEventListener('DOMContentLoaded', () => {
    initAccordion('.accordion');
  });
  