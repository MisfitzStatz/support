const content = {
    en: {
        title: "End testing or been removed",

        removedTitle: "You have been removed",
        removed: `
            <p>
                After the global playtest, all creators who have not been
                verified are removed. From that point on, the game is only
                playable by creators.
            </p>
        `,

        finishedTitle: "You have finished the test",
        finished: `
            <p>
                Register again to receive the download email.
            </p>

            <a class="button-link" href="/install/download/">
                When will I receive the download link?
            </a>
        `,
        attention: `
            <div class="notice">
                <div class="notice-icon">
                    <i data-lucide="triangle-alert"></i>
                </div>

                <div class="notice-content">
                    <strong>Important</strong>
                    <p>The download email is not delivered immediately. Please allow some time for it to arrive.</p>
                </div>
            </div>
        `
    },

    de: {
        title: "Test beendet oder entfernt worden",

        removedTitle: "Du wurdest entfernt",
        removed: `
            <p>
                Nach dem globalen Playtest werden alle nicht verifizierten
                Creator entfernt. Ab diesem Zeitpunkt ist das Spiel nur noch
                für Creator spielbar.
            </p>
        `,

        finishedTitle: "Du hast den Test beendet",
        finished: `
            <p>
                Registriere dich erneut, um die Download-Mail zu erhalten.
            </p>

            <a class="button-link" href="/install/download/">
                Wann erhalte ich den Download-Link?
            </a>
        `,
        attention: `
            <div class="notice">
                <div class="notice-icon">
                    <i data-lucide="triangle-alert"></i>
                </div>

                <div class="notice-content">
                    <strong>Wichtig</strong>
                    <p>Die Download-Mail wird nicht sofort zugestellt. Es kann einige Zeit dauern, bis sie bei dir ankommt.</p>
                </div>
            </div>
        `
    }
};

function getArticleLanguage() {
    return typeof getLanguage === "function" ? getLanguage() : "en";
}

function renderArticle() {
    const language = getArticleLanguage();
    const t = content[language] || content.en;

    document.title = `${t.title} - Misfitz Support`;

    document.getElementById("articleContent").innerHTML = `
        <h1>${t.title}</h1>

        <h2>${t.removedTitle}</h2>
        ${t.removed}

        <h2>${t.finishedTitle}</h2>
        ${t.finished}

        ${t.attention}
    `;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    document.documentElement.lang = language;
}

renderArticle();

window.addEventListener("hashchange", renderArticle);