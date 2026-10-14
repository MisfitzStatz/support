const content = {
    en: {
        title: "When is the next playtest?",

        intro: `
            <p>
                We don't know when the next Misfitz playtest will take place.
                There is currently no confirmed date we can share.
            </p>
        `,

        announcements: `
            <h2>Where will playtests be announced?</h2>

            <p>
                Global playtests are announced by the Antiihero Studios through
                its official social media platforms and the official Discord
                server. Keep an eye on those channels for confirmed dates
                and announcements.
            </p>
        `,

        notice: `
            <div class="notice">
                <div class="notice-icon">
                    <i data-lucide="info"></i>
                </div>
                <div class="notice-content">
                    <strong>Please do not ask individual team members</strong>
                    <p>
                        The community does not know the exact timing of future
                        playtests either. Please do not ask creators,
                        moderators or developers directly about the next date.
                        Wait for an official announcement instead.
                    </p>
                </div>
            </div>
        `
    },

    de: {
        title: "Wann findet der nächste Playtest statt?",

        intro: `
            <p>
                Wir wissen nicht, wann der nächste Misfitz-Playtest stattfinden
                wird. Aktuell gibt es keinen bestätigten Termin, den wir
                nennen können.
            </p>
        `,

        announcements: `
            <h2>Wo werden Playtests angekündigt?</h2>

            <p>
                Globale Playtests werden vom Antiihero Studios über seine
                offiziellen Social-Media-Plattformen und den offiziellen
                Discord-Server angekündigt. Behalte diese Kanäle im Blick,
                um bestätigte Termine und Ankündigungen nicht zu verpassen.
            </p>
        `,

        notice: `
            <div class="notice">
                <div class="notice-icon">
                    <i data-lucide="info"></i>
                </div>
                <div class="notice-content">
                    <strong>Bitte frage keine einzelnen Teammitglieder</strong>
                    <p>
                        Auch die Community kennt den genauen Zeitpunkt
                        zukünftiger Playtests nicht. Bitte frage daher weder
                        Creator noch Moderatoren oder Entwickler direkt nach
                        dem nächsten Termin. Warte stattdessen auf eine
                        offizielle Ankündigung.
                    </p>
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

        ${t.intro}

        ${t.announcements}

        ${t.notice}
    `;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    document.documentElement.lang = language;
}

renderArticle();

window.addEventListener("hashchange", renderArticle);