const content = {
    en: {
        title: "Joining TestFlight fails",

        intro: `
            <p>
                If you cannot join the Misfitz playtest through TestFlight,
                try the troubleshooting steps below.
            </p>
        `,

        troubleshooting: `
            <h2>1. Check your invitation</h2>

            <p>
                Make sure you are using the TestFlight invitation sent to you
                and that you are signed in with the correct Apple Account.
            </p>

            <h2>2. Check your internet connection</h2>

            <p>
                Make sure your device is connected to the internet. Try opening
                a website in Safari. If the connection is not working, try
                another Wi-Fi network or a mobile data connection.
            </p>

            <h2>3. Update your device and TestFlight</h2>

            <p>
                Install the latest available iOS or iPadOS update for your
                device. Also check the App Store for an available TestFlight
                update. Restart your device and try again.
            </p>

            <h2>4. Check Apple's system status</h2>

            <p>
                Apple services may occasionally be unavailable. Check Apple's
                system status page to see whether a relevant service is having
                problems.
            </p>

            <a
                class="button-link"
                href="https://www.apple.com/support/systemstatus/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Apple System Status
            </a>
        `,

        warning: `
            <div class="warning">
                <div class="warning-icon">
                    <i data-lucide="ban"></i>
                </div>

                <div class="warning-content">
                    <strong>Warning</strong>
                    <p>TestFlight invitation codes are unique to each user. You cannot use an invitation intended for someone else or for a different email address. Use your own invitation and the Apple Account associated with it.</p>
                </div>
            </div>
        `,

        furtherHelp: `
            <h2>Still unable to join?</h2>

            <p>
                If none of these steps work, check that your invitation is
                still valid and that the playtest is still available. If the
                problem continues, contact Misfitz Support and include the
                exact error message you see.
            </p>
        `
    },

    de: {
        title: "Beitritt über TestFlight schlägt fehl",

        intro: `
            <p>
                Wenn du dem Misfitz-Playtest nicht über TestFlight beitreten
                kannst, probiere die folgenden Schritte zur Fehlerbehebung.
            </p>
        `,

        troubleshooting: `
            <h2>1. Einladung überprüfen</h2>

            <p>
                Stelle sicher, dass du die für dich bestimmte TestFlight-Einladung
                verwendest und mit dem richtigen Apple Account angemeldet bist.
            </p>

            <h2>2. Internetverbindung überprüfen</h2>

            <p>
                Stelle sicher, dass dein Gerät mit dem Internet verbunden ist.
                Öffne testweise eine Website in Safari. Falls die Verbindung
                nicht funktioniert, probiere ein anderes WLAN oder mobile Daten.
            </p>

            <h2>3. Gerät und TestFlight aktualisieren</h2>

            <p>
                Installiere das neueste für dein Gerät verfügbare iOS- oder
                iPadOS-Update. Prüfe außerdem im App Store, ob ein Update für
                TestFlight verfügbar ist. Starte dein Gerät neu und versuche
                es erneut.
            </p>

            <h2>4. Apple-Systemstatus prüfen</h2>

            <p>
                Apple-Dienste können zeitweise nicht verfügbar sein. Prüfe auf
                Apples Systemstatusseite, ob ein relevanter Dienst derzeit
                Probleme hat.
            </p>

            <a
                class="button-link"
                href="https://www.apple.com/support/systemstatus/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Apple-Systemstatus
            </a>
        `,

        warning: `
            <div class="warning">
                <div class="warning-icon">
                    <i data-lucide="ban"></i>
                </div>

                <div class="warning-content">
                    <strong>Warnung</strong>
                    <p>TestFlight-Einladungscodes sind für jeden Nutzer einzigartig. Du kannst keine Einladung verwenden, die für eine andere Person oder eine andere E-Mail-Adresse bestimmt ist. Verwende deine eigene Einladung und den dazugehörigen Apple Account.</p>
                </div>
            </div>
        `,

        furtherHelp: `
            <h2>Der Beitritt funktioniert weiterhin nicht?</h2>

            <p>
                Wenn keiner dieser Schritte hilft, prüfe, ob deine Einladung
                noch gültig und der Playtest weiterhin verfügbar ist. Besteht
                das Problem weiterhin, wende dich an den Misfitz-Support und
                gib die genaue Fehlermeldung an.
            </p>
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

        ${t.warning}

        ${t.troubleshooting}

        ${t.furtherHelp}
    `;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    document.documentElement.lang = language;
}

renderArticle();

window.addEventListener("hashchange", renderArticle);