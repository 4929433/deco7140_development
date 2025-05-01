import { initGalleryViewer } from './modules/viewer.js';

document.addEventListener('DOMContentLoaded', () => {
    initGalleryViewer();
});


import { initAccordion } from './modules/accordion.js';

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initAccordion('.accordion-item');
});