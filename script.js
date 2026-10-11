const translations = {
    en: {
        home: "Misfitz Support",
        game: "Game Support",
        team: "Team Q&A",
        language: "Language",
        theme: "Theme",
        system: "System",
        light: "Light",
        dark: "Dark",
        disclaimer: "Not affiliated with Antihero Studios. This is a community-run project.",
        legal: "Legal",
        searchPlaceholder: "Describe your problem, e.g. 'I can't download the game'...",
        searchHint: "Describe the problem in your own words. You don't need to know the exact article title.",
        noResults: "No matching article found. Try different words, or search for a shorter description.",
        resultCount: "Matching support articles",
        readArticle: "Open article"
    },
    de: {
        home: "Misfitz Support",
        game: "Game Support",
        team: "Team-Fragen",
        language: "Sprache",
        theme: "Darstellung",
        system: "System",
        light: "Hell",
        dark: "Dunkel",
        disclaimer: "Nicht mit Antihero Studios verknüpft. Dieses Projekt wird privat betrieben.",
        legal: "Rechtliches",
        searchPlaceholder: "Beschreibe dein Problem, z. B. „Ich kann das Spiel nicht herunterladen“ ...",
        searchHint: "Beschreibe das Problem in deinen eigenen Worten. Du musst den genauen Artikelnamen nicht kennen.",
        noResults: "Kein passender Artikel gefunden. Probiere andere Wörter oder beschreibe das Problem kürzer.",
        resultCount: "Passende Supportartikel",
        readArticle: "Artikel öffnen"
    },
    es: {
        home: "Soporte de Misfitz",
        game: "Ayuda del juego",
        team: "Preguntas sobre el equipo",
        language: "Idioma",
        theme: "Tema",
        system: "Sistema",
        light: "Claro",
        dark: "Oscuro",
        disclaimer: "No está afiliado a Antihero Studios. Este proyecto está gestionado por la comunidad.",
        legal: "Aviso legal",
        searchPlaceholder: "Describe tu problema, por ejemplo: «No puedo descargar el juego»...",
        searchHint: "Describe el problema con tus propias palabras. No necesitas conocer el título exacto del artículo.",
        noResults: "No se encontró ningún artículo adecuado. Prueba otras palabras o describe el problema de forma más breve.",
        resultCount: "Artículos de soporte relacionados",
        readArticle: "Abrir artículo"
    },
    fr: {
        home: "Assistance Misfitz",
        game: "Aide sur le jeu",
        team: "Questions sur l’équipe",
        language: "Langue",
        theme: "Thème",
        system: "Système",
        light: "Clair",
        dark: "Sombre",
        disclaimer: "Non affilié à Antihero Studios. Ce projet est géré par la communauté.",
        legal: "Mentions légales",
        searchPlaceholder: "Décrivez votre problème, par ex. « Je ne peux pas télécharger le jeu »...",
        searchHint: "Décrivez le problème avec vos propres mots. Vous n’avez pas besoin de connaître le titre exact de l’article.",
        noResults: "Aucun article correspondant. Essayez d’autres mots ou une description plus courte.",
        resultCount: "Articles d’assistance correspondants",
        readArticle: "Ouvrir l’article"
    },
    ru: {
        home: "Поддержка Misfitz",
        game: "Помощь по игре",
        team: "Вопросы о команде",
        language: "Язык",
        theme: "Тема",
        system: "Системная",
        light: "Светлая",
        dark: "Тёмная",
        disclaimer: "Не связано с Antihero Studios. Проект поддерживается сообществом.",
        legal: "Правовая информация",
        searchPlaceholder: "Опишите проблему, например: «Не могу скачать игру»...",
        searchHint: "Опишите проблему своими словами. Необязательно знать точное название статьи.",
        noResults: "Подходящая статья не найдена. Попробуйте другие слова или более короткое описание.",
        resultCount: "Подходящие статьи поддержки",
        readArticle: "Открыть статью"
    }
};

const supportedLanguages = ["en", "de", "es", "fr", "ru"];

/*
 * Support-Suchindex.
 * Neue Artikel hier ergänzen.
 *
 * Wichtig:
 * Jede URL muss auf eine tatsächlich vorhandene HTML-Seite zeigen.
 */
const searchItems = [
    {
        url: "/install/download/",
        titles: {
            en: "How do I download Misfitz?",
            de: "Wie kann ich Misfitz herunterladen?",
            es: "¿Cómo puedo descargar Misfitz?",
            fr: "Comment télécharger Misfitz ?",
            ru: "Как скачать Misfitz?"
        },
        descriptions: {
            en: "Download the game, install it, get the download link.",
            de: "Spiel herunterladen, installieren, Download-Link erhalten.",
            es: "Descargar e instalar el juego, obtener el enlace de descarga.",
            fr: "Télécharger et installer le jeu, recevoir le lien de téléchargement.",
            ru: "Скачать и установить игру, получить ссылку для загрузки."
        },
        keywords: {
            en: "download install get game link apk ios android",
            de: "download herunterladen installieren spiel link apk ios android laden",
            es: "descargar descarga instalar juego enlace link",
            fr: "télécharger téléchargement installer jeu lien",
            ru: "скачать загрузить установка установить игра ссылка"
        }
    },
    {
        url: "/install/register/",
        titles: {
            en: "How do I register for a playtest?",
            de: "Wie registriere ich mich für einen Playtest?",
            es: "¿Cómo me registro para una prueba de juego?",
            fr: "Comment s’inscrire à un test de jeu ?",
            ru: "Как зарегистрироваться на плейтест?"
        },
        descriptions: {
            en: "Register for Misfitz playtests and use the correct email address.",
            de: "Für Misfitz-Playtests registrieren und die richtige E-Mail-Adresse verwenden.",
            es: "Registrarse para las pruebas de Misfitz y usar el correo correcto.",
            fr: "S’inscrire aux tests Misfitz et utiliser la bonne adresse e-mail.",
            ru: "Регистрация на плейтесты Misfitz и правильный адрес электронной почты."
        },
        keywords: {
            en: "register registration sign up signup email account playtest whitelist",
            de: "registrieren anmelden anmeldung registrierung email e-mail konto playtest freischaltung",
            es: "registrarse registro cuenta correo electrónico email prueba acceso",
            fr: "inscription inscrire compte adresse e-mail email test accès",
            ru: "регистрация зарегистрироваться аккаунт почта электронная почта плейтест доступ"
        }
    },
    {
        url: "/install/download/missing-link/",
        titles: {
            en: "I didn't receive my playtest link",
            de: "Ich habe meinen Playtest-Link nicht erhalten",
            es: "No he recibido el enlace del playtest",
            fr: "Je n’ai pas reçu le lien du test",
            ru: "Я не получил ссылку на плейтест"
        },
        descriptions: {
            en: "Missing invitation, download link, confirmation email or message.",
            de: "Fehlende Einladung, Download-Link, Bestätigungs-E-Mail oder Nachricht.",
            es: "Falta la invitación, el enlace de descarga o el correo de confirmación.",
            fr: "Invitation, lien de téléchargement ou e-mail de confirmation manquant.",
            ru: "Не пришло приглашение, ссылка на скачивание или письмо с подтверждением."
        },
        keywords: {
            en: "missing didn't receive no email mail invitation link code nothing arrived spam inbox",
            de: "nicht erhalten fehlt kein link mail email e-mail einladung code nichts angekommen spam postfach",
            es: "no recibí no llega correo email invitación enlace código spam bandeja",
            fr: "pas reçu aucun mail e-mail invitation lien code spam boîte réception",
            ru: "не получил не пришло письмо почта приглашение ссылка код спам входящие"
        }
    },
    {
        url: "/install/download/next/",
        titles: {
            en: "When is the next playtest?",
            de: "Wann findet der nächste Playtest statt?",
            es: "¿Cuándo será el próximo playtest?",
            fr: "Quand aura lieu le prochain test ?",
            ru: "Когда будет следующий плейтест?"
        },
        descriptions: {
            en: "Find information about upcoming playtests and announcements.",
            de: "Informationen zu kommenden Playtests und Ankündigungen.",
            es: "Información sobre próximos playtests y anuncios.",
            fr: "Informations sur les prochains tests et les annonces.",
            ru: "Информация о следующих плейтестах и объявлениях."
        },
        keywords: {
            en: "when next upcoming date schedule playtest starts begins announcement",
            de: "wann nächster nächste kommende datum termin playtest beginnt startet ankündigung",
            es: "cuándo próximo siguiente fecha comienza anuncio prueba",
            fr: "quand prochain prochaine date début annonce test",
            ru: "когда следующий дата начало плейтест анонс объявление"
        }
    },
    {
        url: "/launch/",
        titles: {
            en: "When is Misfitz coming out?",
            de: "Wann erscheint Misfitz?",
            es: "¿Cuándo saldrá Misfitz?",
            fr: "Quand sortira Misfitz ?",
            ru: "Когда выйдет Misfitz?"
        },
        descriptions: {
            en: "Alpha testing, global launch and release information.",
            de: "Alpha-Tests, weltweiter Start und Informationen zur Veröffentlichung.",
            es: "Pruebas alfa, lanzamiento mundial e información de lanzamiento.",
            fr: "Tests alpha, lancement mondial et informations de sortie.",
            ru: "Альфа-тестирование, глобальный запуск и информация о релизе."
        },
        keywords: {
            en: "release launch out available full version global alpha when coming",
            de: "release veröffentlichung erscheint start verfügbar vollversion global alpha wann",
            es: "lanzamiento salir disponible versión completa global alfa",
            fr: "sortie lancement disponible version complète mondial alpha",
            ru: "релиз выход запуск доступна полная версия глобальный альфа"
        }
    },
    {
        url: "/game/stats/",
        titles: {
            en: "How can I check my stats?",
            de: "Wie kann ich meine Statistiken ansehen?",
            es: "¿Cómo puedo consultar mis estadísticas?",
            fr: "Comment consulter mes statistiques ?",
            ru: "Как посмотреть свою статистику?"
        },
        descriptions: {
            en: "View your in-game profile and additional statistics on MisfitzStatz.",
            de: "Spielerprofil und zusätzliche Statistiken auf MisfitzStatz ansehen.",
            es: "Ver tu perfil del juego y estadísticas adicionales en MisfitzStatz.",
            fr: "Consulter le profil en jeu et des statistiques supplémentaires sur MisfitzStatz.",
            ru: "Просмотр игрового профиля и дополнительной статистики на MisfitzStatz."
        },
        keywords: {
            en: "stats statistics profile player id data numbers performance misfitzstatz",
            de: "stats statistik statistiken profil spieler id daten werte leistung",
            es: "estadísticas perfil jugador id datos números",
            fr: "statistiques profil joueur identifiant données chiffres",
            ru: "статистика статистики профиль игрок id данные показатели"
        }
    },
    {
        url: "/game/misfitz/",
        titles: {
            en: "What is Misfitz?",
            de: "Was ist Misfitz?",
            es: "¿Qué es Misfitz?",
            fr: "Qu’est-ce que Misfitz ?",
            ru: "Что такое Misfitz?"
        },
        descriptions: {
            en: "Learn about the game, Zero, Relics and the world of Misfitz.",
            de: "Informationen über das Spiel, Zero, Relics und die Welt von Misfitz.",
            es: "Información sobre el juego, Zero, las Reliquias y el mundo de Misfitz.",
            fr: "Découvrez le jeu, Zero, les reliques et l’univers de Misfitz.",
            ru: "Информация об игре, Zero, реликвиях и мире Misfitz."
        },
        keywords: {
            en: "game about zero relics world introduction gameplay",
            de: "spiel über zero relics relikte welt einführung gameplay",
            es: "juego zero reliquias mundo introducción",
            fr: "jeu zero reliques univers présentation",
            ru: "игра zero реликвии мир описание"
        }
    },
    {
        url: "/install/app-not-found/googleplay/",
        titles: {
            en: "Misfitz does not appear on Google Play",
            de: "Misfitz wird bei Google Play nicht angezeigt",
            es: "Misfitz no aparece en Google Play",
            fr: "Misfitz n’apparaît pas sur Google Play",
            ru: "Misfitz не отображается в Google Play"
        },
        descriptions: {
            en: "Troubleshoot when the app cannot be found in Google Play.",
            de: "Hilfe, wenn die App im Google Play Store nicht gefunden wird.",
            es: "Solución si no encuentras la aplicación en Google Play.",
            fr: "Que faire si l’application est introuvable sur Google Play.",
            ru: "Что делать, если приложение не находится в Google Play."
        },
        keywords: {
            en: "google play store app not found can't find unavailable search android",
            de: "google play playstore app nicht gefunden wird angezeigt suchen android",
            es: "google play tienda aplicación no aparece no encontrada buscar android",
            fr: "google play store application introuvable n’apparaît pas chercher android",
            ru: "google play магазин приложение не найдено не отображается поиск андроид"
        }
    },
    {
        url: "/install/testflight/",
        titles: {
            en: "TestFlight invitation or installation does not work",
            de: "TestFlight-Einladung oder Installation funktioniert nicht",
            es: "La invitación o instalación de TestFlight no funciona",
            fr: "L’invitation ou l’installation TestFlight ne fonctionne pas",
            ru: "Не работает приглашение или установка через TestFlight"
        },
        descriptions: {
            en: "Help with Apple TestFlight invitations, codes and installation.",
            de: "Hilfe bei Apple-TestFlight-Einladungen, Codes und Installation.",
            es: "Ayuda con invitaciones, códigos e instalación de Apple TestFlight.",
            fr: "Aide concernant les invitations, codes et l’installation Apple TestFlight.",
            ru: "Помощь с приглашениями, кодами и установкой через Apple TestFlight."
        },
        keywords: {
            en: "testflight apple ios iphone ipad invitation invite code redeem install error",
            de: "testflight apple ios iphone ipad einladung code einlösen installieren fehler",
            es: "testflight apple ios iphone ipad invitación código instalar error",
            fr: "testflight apple ios iphone ipad invitation code installer erreur",
            ru: "testflight apple ios iphone ipad приглашение код установить ошибка"
        }
    },
    {
        url: "/install/end-testing/",
        titles: {
            en: "I was removed from the playtest or it ended",
            de: "Ich wurde entfernt oder der Playtest ist beendet",
            es: "Me han eliminado del playtest o ha terminado",
            fr: "J’ai été retiré du test ou il est terminé",
            ru: "Меня удалили из плейтеста или он закончился"
        },
        descriptions: {
            en: "Understand ended tests, removed access and expired invitations.",
            de: "Informationen zu beendeten Tests, entzogenem Zugang und abgelaufenen Einladungen.",
            es: "Información sobre pruebas terminadas, acceso retirado e invitaciones caducadas.",
            fr: "Informations sur les tests terminés, l’accès retiré et les invitations expirées.",
            ru: "Информация о завершённых тестах, закрытом доступе и просроченных приглашениях."
        },
        keywords: {
            en: "removed kicked access ended testing test finished expired invitation",
            de: "entfernt rausgenommen zugang beendet test vorbei abgelaufen einladung",
            es: "eliminado expulsado acceso terminado prueba finalizada invitación caducada",
            fr: "retiré supprimé accès terminé test fini invitation expirée",
            ru: "удалили убрали доступ закончился тест завершён приглашение истекло"
        }
    },
    {
        url: "/install/country-error/",
        titles: {
            en: "Misfitz is not available in my country",
            de: "Misfitz ist in meinem Land nicht verfügbar",
            es: "Misfitz no está disponible en mi país",
            fr: "Misfitz n’est pas disponible dans mon pays",
            ru: "Misfitz недоступна в моей стране"
        },
        descriptions: {
            en: "Help with country, region and Google Play availability errors.",
            de: "Hilfe bei Länder-, Regions- und Google-Play-Verfügbarkeitsfehlern.",
            es: "Ayuda con errores de país, región y disponibilidad en Google Play.",
            fr: "Aide concernant les erreurs de pays, de région et de disponibilité Google Play.",
            ru: "Помощь с ошибками страны, региона и доступности в Google Play."
        },
        keywords: {
            en: "country region location unavailable not available supported error google play",
            de: "land region ort nicht verfügbar geht nicht länderfehler google play",
            es: "país región ubicación no disponible error google play",
            fr: "pays région emplacement indisponible erreur google play",
            ru: "страна регион местоположение недоступно ошибка google play"
        }
    }
];

function getLanguage() {
    const hash = window.location.hash.replace("#", "").toLowerCase();

    if (supportedLanguages.includes(hash)) {
        return hash;
    }

    const browserLanguage = (navigator.language || "en").toLowerCase();
    return supportedLanguages.find(language =>
        browserLanguage.startsWith(language)
    ) || "en";
}

function getTheme() {
    return localStorage.getItem("theme") || "system";
}

function applyTheme(theme) {
    if (theme === "system") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.removeItem("theme");
        return;
    }

    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
}

function getRootPath() {
    return "/";
}

function renderHeader() {
    const language = getLanguage();
    const t = translations[language];
    const header = document.getElementById("header");

    if (!header) return;

    header.innerHTML = `
        <header class="site-header">
            <div class="header-inner">
                <a class="logo" href="/">${t.home}</a>

                <nav class="header-nav">
                    <a href="/game/">${t.game}</a>

                    <div class="header-controls">
                        <select id="languageSelect" aria-label="${t.language}">
                            <option value="en" ${language === "en" ? "selected" : ""}>English</option>
                            <option value="de" ${language === "de" ? "selected" : ""}>Deutsch</option>
                            <option value="es" ${language === "es" ? "selected" : ""}>Español</option>
                            <option value="fr" ${language === "fr" ? "selected" : ""}>Français</option>
                            <option value="ru" ${language === "ru" ? "selected" : ""}>Русский</option>
                        </select>

                        <select id="themeSelect" aria-label="${t.theme}">
                            <option value="system" ${getTheme() === "system" ? "selected" : ""}>${t.system}</option>
                            <option value="light" ${getTheme() === "light" ? "selected" : ""}>${t.light}</option>
                            <option value="dark" ${getTheme() === "dark" ? "selected" : ""}>${t.dark}</option>
                        </select>
                    </div>
                </nav>
            </div>
        </header>
    `;

    document.getElementById("languageSelect").addEventListener("change", event => {
        window.location.hash = event.target.value;
    });

    document.getElementById("themeSelect").addEventListener("change", event => {
        applyTheme(event.target.value);
    });
}

function renderFooter() {
    const language = getLanguage();
    const t = translations[language];
    const footer = document.getElementById("footer");

    if (!footer) return;

    footer.innerHTML = `
        <footer class="site-footer">
            <div class="footer-inner">
                <div class="footer-note">${t.disclaimer}</div>

                <nav class="footer-nav">
                    <a href="https://antiherostudios.com/" target="_blank" rel="noopener noreferrer">Antihero Studios</a>
                    <a href="https://misfitzstatz.com/" target="_blank" rel="noopener noreferrer">Misfitz Statz</a>
                    <a href="/legal/">${t.legal}</a>
                </nav>
            </div>
        </footer>
    `;
}

function normalizeText(value) {
    return String(value || "")
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[ё]/g, "е")
        .replace(/[’‘`]/g, "'")
        .replace(/[^a-z0-9а-яё\s'-]/gi, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function getItemText(item, language) {
    return {
        title: item.titles[language] || item.titles.en,
        description: item.descriptions[language] || item.descriptions.en
    };
}

function levenshteinDistanceAtMostOne(a, b) {
    if (a === b) return true;
    if (Math.abs(a.length - b.length) > 1) return false;

    let i = 0;
    let j = 0;
    let differences = 0;

    while (i < a.length && j < b.length) {
        if (a[i] === b[j]) {
            i++;
            j++;
            continue;
        }

        differences++;

        if (differences > 1) return false;

        if (a.length > b.length) {
            i++;
        } else if (b.length > a.length) {
            j++;
        } else {
            i++;
            j++;
        }
    }

    if (i < a.length || j < b.length) {
        differences++;
    }

    return differences <= 1;
}

function scoreSearchItem(item, query, language) {
    const queryText = normalizeText(query);
    const queryWords = queryText.split(" ").filter(Boolean);

    if (!queryWords.length) return 0;

    const localized = getItemText(item, language);
    const title = normalizeText(localized.title);
    const description = normalizeText(localized.description);
    const allTitles = normalizeText(Object.values(item.titles).join(" "));
    const allDescriptions = normalizeText(Object.values(item.descriptions).join(" "));
    const keywords = normalizeText(Object.values(item.keywords).join(" "));
    const searchable = `${title} ${description} ${keywords} ${allTitles} ${allDescriptions}`;

    let score = 0;
    let matchedWords = 0;

    if (title.includes(queryText)) score += 30;
    if (description.includes(queryText)) score += 12;
    if (keywords.includes(queryText)) score += 15;

    const titleWords = title.split(" ");
    const keywordWords = keywords.split(" ");

    for (const word of queryWords) {
        let wordScore = 0;

        if (titleWords.includes(word)) {
            wordScore = Math.max(wordScore, 10);
        }

        if (title.includes(word)) {
            wordScore = Math.max(wordScore, 7);
        }

        if (keywordWords.includes(word)) {
            wordScore = Math.max(wordScore, 6);
        }

        if (description.includes(word)) {
            wordScore = Math.max(wordScore, 4);
        }

        if (allTitles.includes(word)) {
            wordScore = Math.max(wordScore, 3);
        }

        if (searchable.includes(word)) {
            wordScore = Math.max(wordScore, 2);
        }

        // Toleriert einfache Tippfehler in längeren Wörtern.
        if (wordScore === 0 && word.length >= 5) {
            const closeMatch = searchable.split(" ").some(candidate =>
                candidate.length >= 5 &&
                Math.abs(candidate.length - word.length) <= 1 &&
                levenshteinDistanceAtMostOne(word, candidate)
            );

            if (closeMatch) {
                wordScore = 1;
            }
        }

        if (wordScore > 0) {
            matchedWords++;
            score += wordScore;
        }
    }

    // Treffer mit mehr passenden Suchwörtern werden bevorzugt.
    score += (matchedWords / queryWords.length) * 10;

    if (queryWords.length > 1 && matchedWords < queryWords.length) {
        score *= matchedWords / queryWords.length;
    }

    return matchedWords > 0 ? score : 0;
}

function renderSearchResults(query, results) {
    const language = getLanguage();
    const t = translations[language];
    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) {
        results.innerHTML = "";
        return;
    }

    const matches = searchItems
        .map(item => ({
            item,
            score: scoreSearchItem(item, normalizedQuery, language)
        }))
        .filter(result => result.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8);

    if (!matches.length) {
        results.innerHTML = `
            <div class="search-result">${t.noResults}</div>
        `;
        return;
    }

    results.innerHTML = `
        <div class="search-result search-result-heading">
            ${t.resultCount}
        </div>

        ${matches.map(({ item }) => {
            const text = getItemText(item, language);

            return `
                <a class="search-result" href="${item.url}">
                    <strong>${text.title}</strong>
                    <div>${text.description}</div>
                    <span class="search-result-action">
                        ${t.readArticle} →
                    </span>
                </a>
            `;
        }).join("")}
    `;
}

function setupSearch() {
    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");

    if (!input || !results) return;

    function updateSearchText() {
        const t = translations[getLanguage()];

        input.placeholder = t.searchPlaceholder;
        input.setAttribute("aria-label", t.searchPlaceholder);
        input.setAttribute("title", t.searchHint);
    }

    updateSearchText();

    input.addEventListener("input", () => {
        renderSearchResults(input.value, results);
    });

    window.addEventListener("hashchange", () => {
        updateSearchText();
        renderSearchResults(input.value, results);
    });
}

function updateLanguage() {
    document.documentElement.lang = getLanguage();
}

applyTheme(getTheme());
updateLanguage();
renderHeader();
renderFooter();
setupSearch();

window.addEventListener("hashchange", () => {
    updateLanguage();
    renderHeader();
    renderFooter();
});