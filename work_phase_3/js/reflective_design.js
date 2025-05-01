document.addEventListener('DOMContentLoaded', () => {
    // 选中页面上所有 .accordion-header
    const headers = document.querySelectorAll('.accordion-header');
  
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        if (item) {
          // 切换当前 item 的 open 状态
          item.classList.toggle('open');
        }
      });
    });
  });
  


  import { fetchGetData } from './modules/getData.js';
                    
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('community-list');

    fetchGetData('https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/', {
        'student_number': 's4929433',
        'uqcloud_zone_id': '64e84824'
    }).then(data => {
        if (!data) {
        container.innerHTML = '<p class="text-danger">Unable to load community members.</p>';
        return;
        }

        data.forEach(member => {
            // 条件过滤：仅显示真实姓名和有效内容
            if (
              member.name.length < 3 ||                      // 姓名太短
              !isNaN(member.name) ||                         // 姓名是纯数字
              !member.message || member.message.length < 5   // 留言太短或为空
            ) {
              return; // 跳过该条记录
            }
          
            const card = document.createElement('div');
            card.className = 'card mb-3';
            card.innerHTML = `
    <div class="user-card">
    <div class="user-icon">🎮</div>
    <div class="user-content">
      <h5 class="user-name">${member.name}</h5>
                <p class="card-text">${member.message}</p>
              </div>
            `;
            container.appendChild(card);
          });
          
    });
});
