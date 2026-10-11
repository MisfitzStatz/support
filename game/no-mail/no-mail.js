const content = {
    en: {
        title: "I didn't get my playtest link",

        intro: `
            <p>
                If your Misfitz playtest download link hasn't arrived,
                work through the following steps in order.
            </p>
        `,

        steps: `
            <h2>1. Check the Discord announcements</h2>

            <p>
                Check the #announcements channel on the official Misfitz
                Discord server to see whether a global playtest has been
                announced. Download links are only sent during playtests.
            </p>

            <h2>2. Check your registration email address</h2>

            <p>
                Make sure you entered the correct email address when
                registering. A typo could mean the confirmation or download
                email was sent to a different address.
            </p>

            <h2>3. Sign in to the correct email account</h2>

            <p>
                Make sure you are logged in to the email account you used
                when registering for the playtest. Check that inbox, not
                another email account.
            </p>

            <h2>4. Check your spam folder</h2>

            <p>
                Look in your spam or junk folder. The confirmation email
                or download link email may have been filtered there.
            </p>

            <h2>5. Make sure you received the confirmation email</h2>

            <p>
                Check whether you received a confirmation email after
                registering. If you never received one, your registration
                may not have been completed successfully.
            </p>
        `,

        furtherHelp: `
            <h2>Still haven't received your link?</h2>

            <p>
                If you have checked all the steps above and still cannot
                find your download link, contact Misfitz Support and
                explain which steps you have already tried.
            </p>
        `
    },

    de: {
        title: "Ich habe meinen Playtest-Link nicht erhalten",

        intro: `
            <p>
                Wenn dein Misfitz-Download-Link für den Playtest nicht
                angekommen ist, arbeite die folgenden Schritte der Reihe
                nach durch.
            </p>
        `,

        steps: `
            <h2>1. Discord-Ankündigungen prüfen</h2>

            <p>
                Prüfe den Kanal #announcements auf dem offiziellen
                Misfitz-Discord-Server, um festzustellen, ob ein globaler
                Playtest angekündigt wurde. Download-Links werden nur
                während eines Playtests versendet.
            </p>

            <h2>2. Registrierungs-E-Mail-Adresse überprüfen</h2>

            <p>
                Stelle sicher, dass du bei der Registrierung die richtige
                E-Mail-Adresse eingegeben hast. Ein Tippfehler kann dazu
                führen, dass die Bestätigungs- oder Download-Mail an eine
                andere Adresse gesendet wurde.
            </p>

            <h2>3. Im richtigen E-Mail-Konto anmelden</h2>

            <p>
                Stelle sicher, dass du in dem E-Mail-Konto angemeldet bist,
                das du für die Registrierung zum Playtest verwendet hast.
                Prüfe den Posteingang dieses Kontos und nicht den eines
                anderen E-Mail-Kontos.
            </p>

            <h2>4. Spam-Ordner prüfen</h2>

            <p>
                Kontrolliere deinen Spam- oder Junk-Ordner. Die
                Bestätigungsmail oder die E-Mail mit dem Download-Link
                könnte dort gelandet sein.
            </p>

            <h2>5. Prüfen, ob du die Bestätigungsmail erhalten hast</h2>

            <p>
                Kontrolliere, ob du nach der Registrierung eine
                Bestätigungsmail erhalten hast. Wenn keine angekommen ist,
                wurde deine Registrierung möglicherweise nicht erfolgreich
                abgeschlossen.
            </p>
        `,

        furtherHelp: `
            <h2>Du hast deinen Link weiterhin nicht erhalten?</h2>

            <p>
                Wenn du alle oben genannten Schritte geprüft hast und
                deinen Download-Link trotzdem nicht findest, wende dich
                an den Misfitz-Support und erkläre, welche Schritte du
                bereits ausprobiert hast.
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

        ${t.steps}

        ${t.furtherHelp}
    `;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    document.documentElement.lang = language;
}

renderArticle();

window.addEventListener("hashchange", renderArticle);