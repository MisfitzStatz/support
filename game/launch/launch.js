const content = {
    en: {
        title: "When is Misfitz coming out?",

        intro: `
            <p>
                MISFITZ is currently in development and moving into its
                Alpha phase. There is no confirmed date for the next
                playtest or the full global launch.
            </p>
        `,

        alpha: `
            <h2>Global playtests</h2>

            <p>
                Global playtests give players the opportunity to try MISFITZ
                during limited testing periods. These playtests are announced
                by Antihero Studios through its official social media
                platforms and Discord server.
            </p>

            <p>
                Follow the official channels to find out when the next
                playtest begins.
            </p>

            <p>
                <a href="https://antiherostudios.com/de/faq"
                   target="_blank"
                   rel="noopener noreferrer">
                    Official Antihero Studios FAQ
                </a>
            </p>
        `,

        launch: `
            <h2>When is the global launch?</h2>

            <p>
                A global launch on the Apple App Store and Google Play
                is currently being targeted for late 2027. This is a target
                timeframe, not a confirmed release date, and plans may change
                during development.
            </p>
        `,

        notice: `
            <div class="notice">
                <div class="notice-icon">
                    <i data-lucide="info"></i>
                </div>
                <div class="notice-content">
                    <strong>No global launch does not mean the game is unplayable</strong>
                    <p>
                        There are limited periods when everyone can join
                        and test MISFITZ during a global playtest. Registration
                        is required to receive access information.
                    </p>
                    <p>
                        <a href="/install/register">
                            How to register for MISFITZ
                        </a>
                    </p>
                </div>
            </div>
        `
    },

    de: {
        title: "Wann erscheint Misfitz?",

        intro: `
            <p>
                MISFITZ befindet sich derzeit in Entwicklung und geht in die
                Alpha-Phase über. Für den nächsten Playtest und den vollständigen
                globalen Release gibt es noch keinen bestätigten Termin.
            </p>
        `,

        alpha: `
            <h2>Globale Playtests</h2>

            <p>
                Bei globalen Playtests können Spieler MISFITZ während
                begrenzter Testphasen ausprobieren. Diese Playtests werden
                von Antihero Studios über die offiziellen Social-Media-
                Plattformen und den Discord-Server angekündigt.
            </p>

            <p>
                Folge den offiziellen Kanälen, um zu erfahren, wann der
                nächste Playtest beginnt.
            </p>

            <p>
                <a href="https://antiherostudios.com/de/faq"
                   target="_blank"
                   rel="noopener noreferrer">
                    Offizielle FAQ von Antihero Studios
                </a>
            </p>
        `,

        launch: `
            <h2>Wann erscheint die globale Version?</h2>

            <p>
                Der globale Release im Apple App Store und Google Play wird
                derzeit für Ende 2027 angepeilt. Das ist ein angestrebter
                Zeitraum und kein bestätigtes Veröffentlichungsdatum.
                Während der Entwicklung kann sich die Planung ändern.
            </p>
        `,

        notice: `
            <div class="notice">
                <div class="notice-icon">
                    <i data-lucide="info"></i>
                </div>
                <div class="notice-content">
                    <strong>Kein globaler Launch bedeutet nicht, dass das Spiel unspielbar ist</strong>
                    <p>
                        Es gibt begrenzte Zeiträume, in denen alle bei einem
                        globalen Playtest mitspielen und MISFITZ testen können.
                        Eine Registrierung ist erforderlich, um Informationen
                        zum Zugang zu erhalten.
                    </p>
                    <p>
                        <a href="/install/register">
                            So registrierst du dich für MISFITZ
                        </a>
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

        ${t.alpha}

        ${t.launch}

        ${t.notice}
    `;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    document.documentElement.lang = language;
}

renderArticle();

window.addEventListener("hashchange", renderArticle);