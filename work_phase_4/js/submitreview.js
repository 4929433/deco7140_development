import { postFormData } from './modules/postFormData.js';

document.getElementById('reviewForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const rating = form.querySelector('input[name="rating"]:checked');

  const formData = new FormData();
  formData.append("name", form.username.value);              // 用户名
  const game = form.game.value;
const comment = form.comment.value;
formData.append("message", `🎮 ${game}\n${comment}`);
  formData.append("rating", rating ? rating.value : "0");    // 你可以选择是否单独上传评分
  formData.append("student_number", "s4929433");
  formData.append("uqcloud_zone_id", "64e84824");

  try {
    await fetch("https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/", {
      method: "POST",
      body: formData,
    });
    alert("✅ Review submitted!");
    form.reset();
  } catch (err) {
    alert("❌ Submission failed.");
    console.error(err);
  }
});

