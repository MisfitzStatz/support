const content = {
    en: {
        title: "How can I check my stats?",

        intro: `
            <p>
                There are two ways to check your Misfitz account statistics,
                depending on how much detail you need.
            </p>
        `,

        ingame: `
            <h2>1. Check your in-game profile</h2>

            <p>
                You can find a limited overview of your account in the
                profile editor inside Misfitz. This provides basic
                information about your account.
            </p>
        `,

        misfitzStatz: `
            <h2>2. View more statistics with MisfitzStatz</h2>

            <p>
                <a href="https://misfitzstatz.com/"
                   target="_blank"
                   rel="noopener noreferrer">
                    MisfitzStatz.com
                </a>
                provides additional statistics for your account.
                To access your stats, you need to enter your player ID.
            </p>

            <p>
                Open the website, enter your player ID and view the
                statistics available for your account.
            </p>
        `,

        notice: `
            <div class="notice">
                <div class="notice-icon">
                    <i data-lucide="info"></i>
                </div>
                <div class="notice-content">
                    <strong>MisfitzStatz is an independent website</strong>
                    <p>
                        MisfitzStatz is not owned by or affiliated with
                        Antihero Studios. It displays profile data associated
                        with your account, but cannot access your friends list,
                        registration email address or login information.
                    </p>
                </div>
            </div>
        `
    },

    de: {
        title: "Wie kann ich meine Statistiken ansehen?",

        intro: `
            <p>
                Du kannst deine Misfitz-Accountstatistiken auf zwei Arten
                ansehen, je nachdem, wie viele Details du benötigst.
            </p>
        `,

        ingame: `
            <h2>1. Dein Ingame-Profil prüfen</h2>

            <p>
                Im Profil-Editor von Misfitz findest du eine begrenzte
                Übersicht über deinen Account. Dort werden grundlegende
                Informationen zu deinem Account angezeigt.
            </p>
        `,

        misfitzStatz: `
            <h2>2. Weitere Statistiken mit MisfitzStatz ansehen</h2>

            <p>
                <a href="https://misfitzstatz.com/"
                   target="_blank"
                   rel="noopener noreferrer">
                    MisfitzStatz.com
                </a>
                bietet zusätzliche Statistiken zu deinem Account.
                Um deine Statistiken aufzurufen, benötigst du deine Player-ID.
            </p>

            <p>
                Öffne die Website, gib deine Player-ID ein und sieh dir
                die verfügbaren Statistiken zu deinem Account an.
            </p>
        `,

        notice: `
            <div class="notice">
                <div class="notice-icon">
                    <i data-lucide="info"></i>
                </div>
                <div class="notice-content">
                    <strong>MisfitzStatz ist eine unabhängige Website</strong>
                    <p>
                        MisfitzStatz gehört nicht zu Antihero Studios und
                        steht nicht in Verbindung mit dem Studio. Die Website
                        zeigt Profildaten deines Accounts an, kann aber nicht
                        auf deine Freundesliste, deine Registrierungs-E-Mail-
                        Adresse oder deine Anmeldedaten zugreifen.
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

        ${t.ingame}

        ${t.misfitzStatz}

        ${t.notice}
    `;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    document.documentElement.lang = language;
}

renderArticle();

window.addEventListener("hashchange", renderArticle);