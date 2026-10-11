const content = {
    en: {
        title: "How do I install Misfitz on iPhone or iPad?",

        installation: `
            <h2>Install Misfitz on iOS</h2>

            <p>
                1. Install
                <a
                    href="https://apps.apple.com/app/testflight/id899247664"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    TestFlight
                </a>
                from the App Store.
            </p>

            <p>
                2. Open TestFlight and sign in with your Apple ID using
                the same email address you used to register for Misfitz.
            </p>

            <p>
                3. Make sure your age is set to <strong>16+</strong> and
                you do not have restrictions such as MDM or family
                organization restrictions.
            </p>

            <p>
                4. When you receive an email from Apple saying
                <strong>"Antihero Studios invited you for Misfitz"</strong>,
                open it and join the beta.
            </p>

            <p>
                5. You will be redirected to the installation page.
                Tap <strong>Install</strong> to download Misfitz.
            </p>
        `,

        troubleshooting: `
            <h2>Troubleshooting</h2>

            <h3>Invite not valid for your account</h3>

            <p>
                Make sure the Apple ID you are using matches the email
                address you used to register for Misfitz.
            </p>

            <h3>Misfitz is not in my App Store</h3>

            <p>
                Misfitz is in beta testing. You need to install
                <strong>TestFlight</strong> first to install beta apps.
            </p>

            <h3>TestFlight is not available</h3>

            <p>
                Restart TestFlight and make sure your device is connected
                to Wi-Fi and your age is set to <strong>16+</strong>.
            </p>

            <h3>Still facing issues?</h3>

            <ul>
                <li>Please make sure you completed all steps above.</li>
                <li>Misfitz Support cannot change your Apple ID settings.</li>
                <li>
                    Make sure you registered for Misfitz through
                    <a
                        href="https://antiherostudios.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        antiherostudios.com
                    </a>.
                </li>
            </ul>
        `
    },

    de: {
        title: "Wie installiere ich Misfitz auf iPhone oder iPad?",

        installation: `
            <h2>Misfitz auf iOS installieren</h2>

            <p>
                1. Installiere
                <a
                    href="https://apps.apple.com/app/testflight/id899247664"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    TestFlight
                </a>
                aus dem App Store.
            </p>

            <p>
                2. Öffne TestFlight und melde dich mit deiner Apple ID an.
                Verwende dabei dieselbe E-Mail-Adresse, mit der du dich
                für Misfitz registriert hast.
            </p>

            <p>
                3. Stelle sicher, dass dein Alter auf <strong>16+</strong>
                gesetzt ist und keine Einschränkungen wie MDM oder
                Familienorganisationen aktiv sind.
            </p>

            <p>
                4. Wenn du eine E-Mail von Apple mit
                <strong>"Antihero Studios invited you for Misfitz"</strong>
                erhältst, öffne sie und tritt dem Beta-Test bei.
            </p>

            <p>
                5. Du wirst zur Installationsseite weitergeleitet.
                Tippe auf <strong>Install</strong>, um Misfitz herunterzuladen.
            </p>
        `,

        troubleshooting: `
            <h2>Fehlerbehebung</h2>

            <h3>Einladung ist für deinen Account nicht gültig</h3>

            <p>
                Stelle sicher, dass die verwendete Apple ID mit der
                E-Mail-Adresse übereinstimmt, mit der du dich für
                Misfitz registriert hast.
            </p>

            <h3>Misfitz ist nicht in meinem App Store</h3>

            <p>
                Misfitz befindet sich im Beta-Test.
                Du musst zuerst <strong>TestFlight</strong> installieren,
                um Beta-Apps installieren zu können.
            </p>

            <h3>TestFlight ist nicht verfügbar</h3>

            <p>
                Starte TestFlight neu und stelle sicher, dass dein Gerät
                mit WLAN verbunden ist und dein Alter auf
                <strong>16+</strong> gesetzt ist.
            </p>

            <h3>Du hast weiterhin Probleme?</h3>

            <ul>
                <li>Stelle sicher, dass du alle oben genannten Schritte durchgeführt hast.</li>
                <li>Misfitz Support kann deine Apple-ID-Einstellungen nicht ändern.</li>
                <li>
                    Stelle sicher, dass du dich über
                    <a
                        href="https://antiherostudios.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        antiherostudios.com
                    </a>
                    für Misfitz registriert hast.
                </li>
            </ul>
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

        ${t.installation}

        ${t.troubleshooting}
    `;

    document.documentElement.lang = language;
}

renderArticle();

window.addEventListener("hashchange", renderArticle);