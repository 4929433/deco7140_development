document.addEventListener("DOMContentLoaded", function () {
    const genaiReflectionEn = `
      <section style="max-width: 900px; margin: 2rem auto; background: #fff; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); font-family: 'Nunito', sans-serif; line-height: 1.6;">
        <h1 style color: #2c3e50;">GenAI & MT Usage Reflection</h1>
        <p>This reflection outlines how I used AI tools like ChatGPT during the development of my website project. It follows the four-part framework for responsible GenAI & MT usage.</p>
  
        <h2 style="font-size: 24px; color: #2c3e50;">1. Describe how AI was used</h2>
        <div style="background: #eef6ff; border-left: 4px solid #3498db; border-radius: 6px; padding: 1rem;">
          <p>I used AI to generate semantic HTML, design responsive CSS layouts, and debug JavaScript flip cards. One major task was fixing card flipping issues. Despite applying transform and perspective styles, the effect wasn’t working. AI helped me troubleshoot by checking class selectors, identifying conflicting CSS, and verifying JavaScript event triggers. I also used AI to rewrite and structure content for the accessibility, ethics, and reflection pages.</p>
        </div>
  
        <h2 style="font-size: 24px; color: #2c3e50;">2. Explain how AI supported learning</h2>
        <div style="background: #eef6ff; border-left: 4px solid #3498db; border-radius: 6px; padding: 1rem;">
          <p>AI served as a real-time tutor. It clarified how components like CSS transforms and JS DOM manipulation work together. For example, in solving the flip card issue, AI explained the differences between hover-based and click-triggered interactions and how 3D properties affect the rotation. These insights helped me build mental models of the front-end structure and debug more confidently.</p>
        </div>
  
        <h2 style="font-size: 24px; color: #2c3e50;">3. Critically evaluate AI’s effectiveness</h2>
        <div style="background: #eef6ff; border-left: 4px solid #3498db; border-radius: 6px; padding: 1rem;">
          <p>AI was helpful for generating code quickly, offering design suggestions, and troubleshooting logic. In the flip card example, it helped me recognize when the issue was outside the card’s local styles. However, AI can't visually interpret a page. I had to describe problems clearly and adapt suggestions manually. This made me more aware of how to evaluate and validate external advice critically.</p>
        </div>
  
        <h2 style="font-size: 24px; color: #2c3e50;">4. Discuss ethical considerations</h2>
        <div style="background: #eef6ff; border-left: 4px solid #3498db; border-radius: 6px; padding: 1rem;">
          <p>I used AI responsibly by modifying and understanding everything it generated. I avoided copy-pasting blindly and treated AI as a support tool rather than a shortcut. I also applied ethical design principles to my site—such as transparency, respect for user interaction, and inclusive content—to ensure the overall experience was thoughtful and fair.</p>
        </div>
      </section>
    `;
  
    const container = document.getElementById("genai");
    if (container) {
      container.innerHTML = genaiReflectionEn;
    }
  });
  