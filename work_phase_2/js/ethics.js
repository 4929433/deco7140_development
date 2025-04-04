document.addEventListener("DOMContentLoaded", function () {
    const ethicContent = `
      <section style="max-width: 900px; margin: 2rem auto; background: #fff; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); font-family: 'Nunito', sans-serif; line-height: 1.6;">
        <h1 style="color:rgb(0, 0, 0);">Ethical Evaluation</h1>
        <p>
          Our game website is designed to let users search for games efficiently, share reviews, and discover new content through community interactions. While the platform provides great value, it is important to evaluate potential ethical issues, especially related to user data, expression, and social responsibility.
        </p>
  
        <h2 style="color:rgb(0, 0, 0); font-size: 22px;">Identify Potential Harms</h2>
        <div style="background-color: #eef6ff; padding: 1rem; margin: 1rem 0; border-left: 4px solid #3498db; border-radius: 6px;">
          <h3>What should we consider?</h3>
          <ul>
            <li>Users may be harmed by offensive comments or biased content shared in reviews.</li>
            <li>Collected data (e.g., search history, preferences) could be misused or unintentionally exposed.</li>
            <li>Users may not fully understand what data is being stored and how it is used to generate suggestions.</li>
            <li>Young users may be exposed to inappropriate content without clear moderation.</li>
          </ul>
          <p>Create a list of these potential harms. Discuss with your team to identify blind spots or overlooked risks.</p>
        </div>
  
        <h2 style="color:rgb(0, 0, 0); font-size: 22px;">Link to ACS Values and Principles</h2>
        <div style="background-color: #eef6ff; padding: 1rem; margin: 1rem 0; border-left: 4px solid #3498db; border-radius: 6px;">
          <h3>For each potential harm, ask:</h3>
          <ul>
            <li>Which ACS values apply? (e.g., Enhancement of quality of life, Honesty, Professionalism)</li>
            <li>What principle can guide our response? (e.g., user consent, minimisation of harm, transparency)</li>
            <li>How can we translate these values into specific platform features (e.g., moderation tools, clearer data policies)?</li>
          </ul>
          <p>Make sure your value-principle-response connection is strong and justifiable.</p>
        </div>
  
        <h2 style="color:rgb(0, 0, 0); font-size: 22px;">Navigate Tensions</h2>
        <div style="background-color: #eef6ff; padding: 1rem; margin: 1rem 0; border-left: 4px solid #3498db; border-radius: 6px;">
          <h3>What conflicts might arise?</h3>
          <ul>
            <li>Users want maximum freedom to express opinions, but others want safe, respectful spaces.</li>
            <li>Designing a personalized experience requires data, but this may conflict with privacy expectations.</li>
            <li>Moderation may restrict content some users see as fair feedback.</li>
          </ul>
          <p>Explain how your design decisions resolve these tensions, and ensure you have clear reasons tied to values and user needs.</p>
          <p>Invite peer review of your reasoning and adjustments to ensure ethical integrity.</p>
        </div>
      </section>
    `;
  
    const container = document.getElementById("ethic");
    if (container) {
      container.innerHTML = ethicContent;
    }
  });
  