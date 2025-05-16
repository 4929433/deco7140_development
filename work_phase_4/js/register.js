document.addEventListener("DOMContentLoaded", () => {
    const backToLoginPopup = document.getElementById("backToLoginPopup");
    const avatarInput = document.getElementById("avatar");
    const avatarPreview = document.getElementById("avatarPreview");
    const fileNameDisplay = document.getElementById("fileName");
    const form = document.getElementById("community-form");
    const feedback = document.getElementById("form-feedback");

    // ⏪ 回到主页并打开登录弹窗
    backToLoginPopup?.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem("triggerLoginOnLoad", "true");
        window.location.href = "homepage.html";
    });

    // 📸 头像预览 + 文件名显示
    avatarInput?.addEventListener("change", () => {
        const file = avatarInput.files[0];
        if (file) {
            avatarPreview.src = URL.createObjectURL(file);
            avatarPreview.style.display = "block";
            fileNameDisplay.textContent = file.name;
        } else {
            fileNameDisplay.textContent = "No file chosen";
            avatarPreview.style.display = "none";
        }
    });

    // 📤 注册提交逻辑
    form?.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        formData.append("student_number", "s4929433");
        formData.append("uqcloud_zone_id", "64e84824");

        feedback.textContent = "Submitting...";

        try {
            const response = await fetch(
                "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json();

            if (response.ok) {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("username", form.name.value);
                if (
                    avatarPreview.src &&
                    avatarPreview.style.display !== "none"
                ) {
                    localStorage.setItem("avatar", avatarPreview.src);
                }

                feedback.textContent = "Registration successful! Logging in...";
                feedback.style.color = "#4ade80";

                setTimeout(() => {
                    window.location.href = "homepage.html";
                }, 1500);
            } else {
                feedback.textContent =
                    result.message || "Something went wrong.";
                feedback.style.color = "#f87171";
            }
        } catch (error) {
            feedback.textContent = "Network error. Please try again.";
            feedback.style.color = "#f87171";
            console.error(error);
        }
    });
});
