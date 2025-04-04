document.addEventListener("DOMContentLoaded", function () {
  const ethicContent = `
    <section style="max-width: 900px; margin: 2rem auto; background: #fff; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); font-family: 'Nunito', sans-serif; line-height: 1.6;">
      <h1 style="color: #2c3e50;">Ethical</h1>
      <p>Our website allows users to search for games, leave reviews, and discover new recommendations. As we develop such a user-driven platform, it is crucial to evaluate our decisions from an ethical perspective.</p>

      <h2 style="color: #2c3e50; font-size: 24px;">Identify Potential Harms</h2>
      <div style="background-color: #eef6ff; padding: 1rem; margin: 1rem 0; border-left: 4px solid #3498db; border-radius: 6px;">
        <ul>
          <li>Exposure to harmful or misleading content in the reviews section.</li>
          <li>Misuse or leakage of user data such as search and comment history.</li>
          <li>Younger audiences accessing age-inappropriate content if moderation is insufficient.</li>
          <li>Lack of transparency regarding what user data is collected and why.</li>
        </ul>
        <p>Create a list of harms and review them with your team or supervisor for feedback.</p>
      </div>

      <h2 style="color: #2c3e50; font-size: 24px;">ACS Values and Principles → Solutions</h2>
      <div style="background-color: #eef6ff; padding: 1rem; margin: 1rem 0; border-left: 4px solid #3498db; border-radius: 6px;">
        <ul>
          <li><strong>Privacy:</strong> Apply minimal data collection and ensure informed consent.</li>
          <li><strong>Enhancing Quality of Life:</strong> Build a platform that encourages inclusive and respectful participation.</li>
          <li><strong>Honesty and Transparency:</strong> Let users understand how moderation and data handling work.</li>
        </ul>
        <p>Use these values and principles to guide feature design and ensure social responsibility.</p>
      </div>

      <h2 style="color: #2c3e50; font-size: 24px;">Navigating Tensions</h2>
      <div style="background-color: #eef6ff; padding: 1rem; margin: 1rem 0; border-left: 4px solid #3498db; border-radius: 6px;">
        <ul>
          <li><strong>Freedom of Expression vs Community Safety:</strong> We allow open feedback but implement moderation and reporting tools to prevent misuse.</li>
          <li><strong>Personalization vs Privacy:</strong> We offer tailored recommendations only when users agree to data usage.</li>
          <li><strong>Information Openness vs Accuracy:</strong> We encourage fact-based reviews and add notices to unverified content.</li>
        </ul>
        <p>There is no single correct answer—what matters is that you justify your decisions clearly and align them with user well-being.</p>
      </div>
    </section>
  `;

  const container = document.getElementById("ethic");
  if (container) {
    container.innerHTML = ethicContent;
  }
});