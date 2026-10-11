const content = {
    en: {
        title: "The game requires an update",

        maintenance: `
            <h2>After maintenance</h2>

            <p>
                After maintenance, please check for a new version of Misfitz.
            </p>

            <p>
                On <strong>iOS</strong>, open TestFlight and check for the
                latest version.
            </p>

            <p>
                On <strong>Android</strong>, open Google Play and check for
                an available update.
            </p>

            <p>
                If the update does not appear, restart the app and your device
                and check again.
            </p>

            <p>
                If you have not received the update after
                <strong>6 hours</strong>, use the support option provided
                below.
            </p>
        `,

        globalPlaytests: `
            <h2>After global playtests</h2>

            <div class="warning">
                <div class="warning-icon">
                    <i data-lucide="ban"></i>
                </div>

                <div class="warning-content">
                    <strong>Attention</strong>
                    <p>
                        After global playtests, regular playtest access will end.
                        Only creators will be able to access Misfitz.
                    </p>
                </div>
            </div>

            <p>
                When global playtests end, Misfitz will only be available
                for creators.
            </p>

            <p>
                To verify that only creators can access the game,
                creators will receive the creator update.
            </p>
        `
    },

    de: {
        title: "Das Spiel benötigt ein Update",

        maintenance: `
            <h2>Nach Wartungsarbeiten</h2>

            <p>
                Nach Wartungsarbeiten solltest du nach einer neuen Version
                von Misfitz suchen.
            </p>

            <p>
                Auf <strong>iOS</strong> öffnest du TestFlight und prüfst,
                ob die neueste Version verfügbar ist.
            </p>

            <p>
                Auf <strong>Android</strong> öffnest du Google Play und
                prüfst, ob ein Update verfügbar ist.
            </p>

            <p>
                Wenn das Update nicht angezeigt wird, starte die App und
                dein Gerät neu und prüfe erneut.
            </p>

            <p>
                Wenn du nach <strong>6 Stunden</strong> noch kein Update
                erhalten hast, nutze die unten angegebene Support-Option.
            </p>
        `,

        globalPlaytests: `
            <h2>Nach globalen Playtests</h2>

            <div class="warning">
                <div class="warning-icon">
                    <i data-lucide="ban"></i>
                </div>

                <div class="warning-content">
                    <strong>Achtung</strong>
                    <p>
                        Nach den globalen Playtests endet der normale
                        Playtest-Zugriff. Nur Creator werden weiterhin
                        Zugriff auf Misfitz haben.
                    </p>
                </div>
            </div>

            <p>
                Wenn globale Playtests beendet sind, wird Misfitz nur noch
                für Creator verfügbar sein.
            </p>

            <p>
                Um sicherzustellen, dass nur Creator Zugriff auf das Spiel
                haben, erhalten Creator das entsprechende Creator-Update.
            </p>
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

        ${t.maintenance}

        ${t.globalPlaytests}
    `;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    document.documentElement.lang = language;
}

renderArticle();

window.addEventListener("hashchange", renderArticle);