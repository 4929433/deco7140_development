const userStories = [
    {
        userName:
            "🧑 20-Year-Old University Student (focus on social and visual experience)",
        initialPrompt: "Describe what you want in a gaming website.",
        question: "What are your needs and expectations?",
        response: `
        <ul>
        <li>A vibrant community to post, chat, and find teammates.</li>
        <li>Access to live streams, gaming events, and trending rankings.</li>
        <li>Optional registration — only required for commenting or posting.</li>
        <li>Game news & strategy guides</li>
        <li>Real-time chat or bulletin board</li>
        <li>Team-up lobby (“Who’s playing tonight?”)</li>
        <li>Player profiles and game stats</li>
        <li>Points system or a small marketplace</li>
        </ul>
    `,
        story: "As a university student who loves socializing and teaming up for games, I want a community where I can post, chat, and find teammates, so that I can easily meet like-minded gamers and enjoy multiplayer experiences.",
    },
    {
        userName: "👨‍💻 30-Year-Old Programmer (focus on logic and efficiency)",
        initialPrompt: "Describe your expectations for a gaming website.",
        question: "What features and design do you prefer?",
        response: `
        <ul>
        <li>A clean, efficient website with clear navigation.</li>
        <li>Personalized game recommendations and discount tracking.</li>
        <li>Integration with Steam or RSS feeds for updates.</li>
        <li>OAuth login (Google, Steam) preferred for quick access.</li>
        <li>Discount alerts</li>
        <li>Playtime tracking & performance analytics</li>
        <li>Quick search & smart filters</li>
        <li>Simple Q&A forum</li>
        </ul>
    `,
        story: "As a busy programmer who values efficiency, I want a clean, personalized platform with useful tools and recommendations, so that I can quickly find relevant content and make the most of my limited gaming time.",
    },
    {
        userName:
            "🧔 40-Year-Old Middle-Aged Man (focus on usability and simplicity)",
        initialPrompt: "Tell us what kind of gaming website you'd enjoy.",
        question: "What helps you discover and enjoy games?",
        response: `
        <ul>
        <li>Straightforward UI with useful game suggestions.</li>
        <li>Tailored recommendations for casual/family gaming.</li>
        <li>No unnecessary distractions or aggressive ads.</li>
        <li>Registration optional for browsing; only required for posting.</li>
        <li>Curated lists for relaxing or solo games</li>
        <li>Hardware checker: “Can my PC run this?”</li>
        <li>Beginner-friendly walkthroughs</li>
        <li>Simple rating summaries</li>
        <li>Optional notifications via email/WeChat</li>
        </ul>
    `,
        story: "As a middle-aged casual gamer, I want a simple and peaceful website with curated suggestions, so that I can easily discover relaxing games that fit into my schedule without being overwhelmed by complexity.",
    },
];

//page
const main = document.querySelector("main");
main.innerHTML = "";

userStories.forEach((storyData, index) => {
    const section = document.createElement("section");
    section.className = "interview p-4 mb-4";
    section.innerHTML = `
    <h5 class="user-name mb-2">${storyData.userName}</h5>
    <p class="initial-prompt mb-1"><strong>${storyData.initialPrompt}</strong></p>
    <p class="question mb-1 tooltip-trigger" data-index="${index}"><em>${storyData.question}</em></p>
    <div class="tooltip" id="tooltip-${index}">
        <span class="label">📝 User Story:</span>
        <p>${storyData.story}</p>
    </div>
    <div class="response">${storyData.response}</div>
    `;
    main.appendChild(section);
});

//tooltip
document.querySelectorAll(".tooltip-trigger").forEach((trigger) => {
    const index = trigger.dataset.index;
    const tooltip = document.getElementById(`tooltip-${index}`);

    trigger.addEventListener("mouseenter", () => {
        const rect = trigger.getBoundingClientRect();
        tooltip.style.top = `${rect.bottom + window.scrollY + 8}px`;
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.classList.add("show");
    });

    trigger.addEventListener("mouseleave", () => {
        tooltip.classList.remove("show");
    });
});
