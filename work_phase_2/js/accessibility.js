document.addEventListener("DOMContentLoaded", function () {
  const accessibilityContent = `
    <section style="max-width: 900px; margin: 2rem auto; background: #fff; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); font-family: 'Nunito', sans-serif; line-height: 1.6;">
      <h1 style="color:rgb(0, 0, 0);">Accessibility Commitment</h1>
      <p>
        Our website is designed to support users with a variety of needs, including those who seek fast access to game information, meaningful community interaction, and game recommendations. We are committed to inclusive and accessible design that aligns with the Web Content Accessibility Guidelines (WCAG 2.1).
      </p>

      <h2 style="color:rgb(0, 0, 0); font-size: 22px">How We Support Accessibility</h2>
      <ul>
        <li><strong>Clear structure (1.3.2):</strong> Content follows a logical reading order using appropriate headings and sections.</li>
        <li><strong>Text alternatives (1.1.1):</strong> Text is used instead of images to ensure clarity across assistive devices.</li>
        <li><strong>High contrast and color cues (1.4.1, 1.4.3):</strong> Visual elements provide sufficient color contrast and are never dependent on color alone.</li>
        <li><strong>Keyboard accessibility (2.1.1):</strong> Interactive elements such as flip cards can be navigated via keyboard using <code>tabindex</code>.</li>
        <li><strong>Focus visibility (2.4.7):</strong> Keyboard users can see which element is currently in focus.</li>
        <li><strong>Consistent navigation (3.2.3):</strong> Navigation menus and layouts remain consistent across the site.</li>
        <li><strong>Readable content (3.1.5):</strong> Language used is clear and intended to be understandable to a wide range of users.</li>
      </ul>

      <h2 style="color:rgb(0, 0, 0); font-size: 22px">Relevant Standards & Reasoning</h2>

      <div style="background-color: #eef6ff; padding: 1rem; margin: 1rem 0; border-left: 4px solid #3498db; border-radius: 6px;">
        <h3 style="margin-top: 0;">Need: Quickly Find Game Information</h3>
        <ul>
          <li><strong>1.3.2 Meaningful Sequence</strong> – Ensures game info is easy to scan and navigate.</li>
          <li><strong>1.4.3 Perceivable Text Contrast</strong> – Supports readability when searching for titles.</li>
          <li><strong>3.2.3 Consistent Navigation</strong> – Helps users locate search tools and game sections quickly.</li>
        </ul>
      </div>

      <div style="background-color: #eef6ff; padding: 1rem; margin: 1rem 0; border-left: 4px solid #3498db; border-radius: 6px;">
        <h3 style="margin-top: 0;">Need: Share Opinions & Join Discussion</h3>
        <ul>
          <li><strong>2.1.1 Keyboard Navigability</strong> – Enables all users to access comment and discussion areas.</li>
          <li><strong>2.4.7 Focus Visible</strong> – Helps users know where they are when navigating posts.</li>
          <li><strong>3.3.2 Labels & Instructions</strong> – Supports accessible form fields when adding reviews.</li>
        </ul>
      </div>

      <div style="background-color: #eef6ff; padding: 1rem; margin: 1rem 0; border-left: 4px solid #3498db; border-radius: 6px;">
        <h3 style="margin-top: 0;">Need: Discover New and Relevant Games</h3>
        <ul>
          <li><strong>1.1.1 Text Alternatives</strong> – Ensures all recommendation cards have accessible content.</li>
          <li><strong>3.2.4 Consistent Identification</strong> – Uses consistent visual patterns in recommendations.</li>
          <li><strong>1.4.1 Avoid Color-only Cues</strong> – Communicates features beyond just color coding.</li>
        </ul>
      </div>

      <h2 style="color:rgb(0, 0, 0); font-size: 22px">Ongoing Improvements</h2>
      <p>
        As we add features such as user reviews and comment forms, we will implement accessible input support such as error messages, labels, and guidance. Our goal is to foster a digital environment where all users, including those using assistive technologies, feel supported and included.
      </p>
    </section>
  `;

  const container = document.getElementById('accessibility');
  if (container) {
    container.innerHTML = accessibilityContent;
  }
});

