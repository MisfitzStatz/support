const content = {
    en: {
        title: "Misfitz is not available in my country",

        availability: `
            <h2>Misfitz Availability</h2>

            <p>
                If Google Play shows that Misfitz is
                <strong>not available in your country</strong>,
                you do not need to change your country or use another
                Google Play account.
            </p>

            <p>
                Misfitz will be available in <strong>all countries</strong>,
                including during playtests, pre-alpha, and alpha versions.
            </p>
        `,

        downloadEmail: `
            <h2>Wait for the download email</h2>

            <p>
                You need to wait for the email containing the download link.
            </p>

            <p>
                If you receive an email with a download link, it means that
                you have been added to the playtest.
            </p>
        `,

        troubleshooting: `
            <h2>I received the download email but still see the country error</h2>

            <p>
                Make sure that the Google Play account you are currently
                using is the <strong>same account you used when registering
                for Misfitz</strong>.
            </p>

            <p>
                If you are using the correct account and still have the issue,
                continue with the support option below.
            </p>
        `,

        brazil: `
            <div class="notice">
                <div class="notice-icon">
                    <i data-lucide="triangle-alert"></i>
                </div>

                <div class="notice-content">
                    <strong>Important</strong>

                    <p>
                        In the Brazilian Google Play Store, you do not need
                        registration.
                    </p>

                    <p>
                        Installing Misfitz from any other country requires
                        registration.
                    </p>

                    <a
                        class="button-link"
                        href="https://antiherostudios.com/en?creatorCode=SCHARKY"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Register for Misfitz
                    </a>
                </div>
            </div>
        `
    },

    de: {
        title: "Misfitz ist in meinem Land nicht verfügbar",

        availability: `
            <h2>Misfitz-Verfügbarkeit</h2>

            <p>
                Wenn Google Play anzeigt, dass Misfitz
                <strong>in deinem Land nicht verfügbar</strong> ist,
                musst du dein Land oder dein Google-Play-Konto nicht ändern.
            </p>

            <p>
                Misfitz wird in <strong>allen Ländern</strong> verfügbar sein,
                auch während Playtests, Pre-Alpha und Alpha.
            </p>
        `,

        downloadEmail: `
            <h2>Warte auf die Download-E-Mail</h2>

            <p>
                Du musst auf die E-Mail mit dem Download-Link warten.
            </p>

            <p>
                Wenn du eine E-Mail mit einem Download-Link erhältst,
                wurdest du zum Playtest hinzugefügt.
            </p>
        `,

        troubleshooting: `
            <h2>Ich habe die Download-E-Mail erhalten, sehe aber weiterhin den Länderfehler</h2>

            <p>
                Stelle sicher, dass das Google-Play-Konto, das du gerade
                verwendest, <strong>dasselbe Konto ist, mit dem du dich
                für Misfitz registriert hast</strong>.
            </p>

            <p>
                Wenn du das richtige Konto verwendest und der Fehler
                weiterhin angezeigt wird, fahre mit der unten angegebenen
                Support-Option fort.
            </p>
        `,

        brazil: `
            <div class="notice">
                <div class="notice-icon">
                    <i data-lucide="triangle-alert"></i>
                </div>

                <div class="notice-content">
                    <strong>Wichtig</strong>

                    <p>
                        Im brasilianischen Google Play Store ist keine Registrierung
                        erforderlich.
                    </p>

                    <p>
                        Die Installation von Misfitz aus einem anderen Land
                        erfordert eine Registrierung.
                    </p>

                    <a
                        class="button-link"
                        href="https://antiherostudios.com/en?creatorCode=SCHARKY"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Für Misfitz registrieren
                    </a>
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
    const t = content[language];

    document.title = `${t.title} - Misfitz Support`;

    document.getElementById("articleContent").innerHTML = `
        <h1>${t.title}</h1>

        ${t.availability}

        ${t.downloadEmail}

        ${t.troubleshooting}

        ${t.brazil}
    `;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
    
    document.documentElement.lang = language;
}

renderArticle();

window.addEventListener("hashchange", renderArticle);