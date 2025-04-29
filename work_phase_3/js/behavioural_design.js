import { postFormData } from './modules/postFormData.js';
            
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('community-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        feedback.textContent = 'Submitting...';
        const { success, data } = await postFormData(form, 'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/', {
            'student_number': 's4929433',
            'uqcloud_zone_id': '64e84824',
        });

        if (success) {
            feedback.textContent = data.message;
            form.reset();
        } else {
            feedback.textContent = data.message || 'Something went wrong.';
        }
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
              <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">${member.message}</p>
              </div>
            `;
            container.appendChild(card);
          });
          
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".section-content img").forEach(img => {
      img.addEventListener("click", () => {
        img.classList.toggle("enlarged");
      });
    });
  });
  