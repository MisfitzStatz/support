const content = {
    en: {
        title: "What is Misfitz?",

        description: `
            <p>
                Zero never shows its face. It doesn't need to. From the
                shadows, it over-optimizes the world, scrubbing humans out
                and locking culture away as Relics: songs, art, memories,
                video games… every trace of what makes us human.
            </p>

            <p>
                You, as a MISFITZ, are the rebellion: a neon-stained outsider
                breaking into Zero's machine-run streets to steal culture
                back, earn your name, and become the best Relic Collector.
                But can you trust the other Misfitz? Maybe. MISFITZ is built
                around one question: who can you trust when the stakes are
                high? Your best strategy might be to build friendships,
                or break them.
            </p>
        `,

        signupTitle: "Join the rebellion",
        signupText: "Sign up to get access to Misfitz playtests.",
        signupButton: "Sign up for Misfitz"
    },

    de: {
        title: "Was ist Misfitz?",

        description: `
            <p>
                Zero zeigt niemals sein Gesicht. Das muss es auch nicht.
                Aus den Schatten heraus optimiert es die Welt bis ins
                Extrem, löscht die Menschen aus und sperrt Kultur in Relikten
                ein: Songs, Kunst, Erinnerungen, Videospiele … jede Spur
                dessen, was uns menschlich macht.
            </p>

            <p>
                Du bist als MISFITZ Teil der Rebellion: ein neonfarbener
                Außenseiter, der in die von Maschinen kontrollierten Straßen
                von Zero eindringt, um die Kultur zurückzuholen, sich einen
                Namen zu machen und zum besten Relikt-Sammler zu werden.
                Doch kannst du den anderen Misfitz vertrauen? Vielleicht.
                MISFITZ dreht sich um eine Frage: Wem kannst du vertrauen,
                wenn viel auf dem Spiel steht? Deine beste Strategie könnte
                darin bestehen, Freundschaften zu schließen oder sie zu brechen.
            </p>
        `,

        signupTitle: "Werde Teil der Rebellion",
        signupText: "Registriere dich, um Zugang zu Misfitz-Playtests zu erhalten.",
        signupButton: "Für Misfitz registrieren"
    },

    ru: {
        title: "Что такое Misfitz?",

        description: `
            <p>
                Zero никогда не показывает своего лица. Ему это и не нужно.
                Действуя из тени, оно доводит оптимизацию мира до крайности,
                стирает людей и запирает культуру в Реликвиях: песни,
                искусство, воспоминания, видеоигры… всё, что делает нас людьми.
            </p>

            <p>
                Ты, как MISFITZ, часть сопротивления: неоновый аутсайдер,
                проникающий на улицы, контролируемые машинами Zero, чтобы
                вернуть культуру, заслужить своё имя и стать лучшим
                собирателем Реликвий. Но можно ли доверять другим Misfitz?
                Возможно. MISFITZ строится вокруг одного вопроса: кому
                можно доверять, когда на кону так много? Лучшая стратегия
                может заключаться в том, чтобы заводить друзей или предавать их.
            </p>
        `,

        signupTitle: "Присоединяйся к сопротивлению",
        signupText: "Зарегистрируйся, чтобы получить доступ к тестированиям Misfitz.",
        signupButton: "Зарегистрироваться в Misfitz"
    },

    es: {
        title: "¿Qué es Misfitz?",

        description: `
            <p>
                Zero nunca muestra su rostro. No lo necesita. Desde las
                sombras, lleva la optimización del mundo al extremo,
                borrando a los humanos y encerrando la cultura en forma
                de Reliquias: canciones, arte, recuerdos, videojuegos…
                todo rastro de lo que nos hace humanos.
            </p>

            <p>
                Tú, como MISFITZ, formas parte de la rebelión: un marginado
                cubierto de neón que se infiltra en las calles controladas
                por las máquinas de Zero para recuperar la cultura, ganarse
                un nombre y convertirse en el mejor recolector de Reliquias.
                Pero ¿puedes confiar en los demás Misfitz? Quizá. MISFITZ gira
                en torno a una pregunta: ¿en quién puedes confiar cuando hay
                tanto en juego? Tu mejor estrategia podría ser forjar amistades
                o romperlas.
            </p>
        `,

        signupTitle: "Únete a la rebelión",
        signupText: "Regístrate para obtener acceso a las pruebas de Misfitz.",
        signupButton: "Registrarse en Misfitz"
    },

    fr: {
        title: "Qu'est-ce que Misfitz ?",

        description: `
            <p>
                Zero ne montre jamais son visage. Il n'en a pas besoin.
                Depuis les ombres, il pousse l'optimisation du monde à
                l'extrême, efface les humains et enferme la culture dans
                des Reliques : chansons, art, souvenirs, jeux vidéo…
                chaque trace de ce qui fait de nous des êtres humains.
            </p>

            <p>
                En tant que MISFITZ, tu fais partie de la rébellion :
                un outsider aux couleurs néon qui s'infiltre dans les rues
                contrôlées par les machines de Zero pour récupérer la culture,
                se faire un nom et devenir le meilleur collectionneur de
                Reliques. Mais peux-tu faire confiance aux autres Misfitz ?
                Peut-être. MISFITZ repose sur une question : à qui faire
                confiance quand les enjeux sont élevés ? Ta meilleure
                stratégie pourrait être de nouer des amitiés ou de les briser.
            </p>
        `,

        signupTitle: "Rejoins la rébellion",
        signupText: "Inscris-toi pour accéder aux tests de Misfitz.",
        signupButton: "S'inscrire à Misfitz"
    }
};

function getArticleLanguage() {
    const language = typeof getLanguage === "function" ? getLanguage() : "en";
    return content[language] ? language : "en";
}

function renderArticle() {
    const language = getArticleLanguage();
    const t = content[language];

    document.title = `${t.title} - Misfitz Support`;

    document.getElementById("articleContent").innerHTML = `
        <h1>${t.title}</h1>

        ${t.description}

        <h2>${t.signupTitle}</h2>

        <p>${t.signupText}</p>

        <a
            class="button-link"
            href="https://antiherostudios.com/?creatorCode=SCHARKY"
            target="_blank"
            rel="noopener noreferrer"
        >
            ${t.signupButton}
        </a>
    `;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    document.documentElement.lang = language;
}

renderArticle();

window.addEventListener("hashchange", renderArticle);