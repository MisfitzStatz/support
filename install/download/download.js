const content = {
    en: {
        title: "When will I receive the download link?",
        confirmation: `
            <h2>1. Check your confirmation email</h2>
            <p>
                After registering on the Misfitz website, you should receive
                a confirmation email immediately. This confirms that your
                registration was submitted.
            </p>
        `,
        playtest: `
            <div class="notice">
                <div class="notice-icon">
                    <i data-lucide="triangle-alert"></i>
                </div>
                <div class="notice-content">
                    <strong>Download emails are only sent during playtests</strong>
                    <p>
                        You will only receive an email containing the download
                        link when a playtest is taking place. Registering does
                        not mean that the download link will arrive immediately.
                    </p>
                </div>
            </div>
        `,
        batches: `
            <h2>2. Emails are sent in batches</h2>
            <p>
                Download emails are sent in batches. After they start being
                sent, delivery can take between <strong>6 and 24 hours</strong>.
                Please allow this time before assuming that something went wrong.
            </p>
        `,
        spam: `
            <h2>3. Check your spam folder</h2>
            <p>
                If the download email has not arrived, check your spam or junk
                folder as well as your inbox. Email filters sometimes put
                legitimate messages in the wrong place.
            </p>
        `
    },
    de: {
        title: "Wann erhalte ich den Download-Link?",
        confirmation: `
            <h2>1. Bestätigungsmail prüfen</h2>
            <p>
                Direkt nach deiner Registrierung auf der Misfitz-Website
                solltest du eine Bestätigungsmail erhalten. Sie bestätigt,
                dass deine Registrierung übermittelt wurde.
            </p>
        `,
        playtest: `
            <div class="notice">
                <div class="notice-icon">
                    <i data-lucide="triangle-alert"></i>
                </div>
                <div class="notice-content">
                    <strong>Download-Mails werden nur während eines Playtests versendet</strong>
                    <p>
                        Du erhältst die E-Mail mit dem Download-Link nur dann,
                        wenn gerade ein Playtest stattfindet. Eine Registrierung
                        bedeutet nicht, dass der Download-Link sofort verschickt wird.
                    </p>
                </div>
            </div>
        `,
        batches: `
            <h2>2. Die E-Mails werden in mehreren Wellen versendet</h2>
            <p>
                Die Download-Mails werden in Batches, also in mehreren Wellen,
                versendet. Nachdem der Versand begonnen hat, kann es
                <strong>6 bis 24 Stunden</strong> dauern, bis die E-Mail bei dir
                ankommt. Warte diesen Zeitraum bitte ab, bevor du von einem
                Problem ausgehst.
            </p>
        `,
        spam: `
            <h2>3. Spam-Ordner kontrollieren</h2>
            <p>
                Wenn die Download-Mail nicht angekommen ist, kontrolliere neben
                deinem Posteingang auch den Spam- bzw. Junk-Ordner.
                E-Mail-Filter sortieren Nachrichten manchmal falsch ein.
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
        ${t.confirmation}
        ${t.playtest}
        ${t.batches}
        ${t.spam}
    `;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    document.documentElement.lang = language;
}

renderArticle();
window.addEventListener("hashchange", renderArticle);
