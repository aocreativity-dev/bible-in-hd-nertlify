const translations = {
  fr: {
    navExplore:"Explorer la Bible",navStudy:"Étude biblique",navDevotional:"Méditations",navPrayer:"Prière",navWatch:"Voir & écouter",begin:"Commencer aujourd’hui ↗",
    eyebrow:"UN REGARD NOUVEAU SUR LA PAROLE",heroTitle:"Découvrez la Parole.<br><em>Voyez autrement.</em>",heroText:"Un espace pour explorer la Bible, approfondir votre compréhension et faire une place à Dieu dans votre quotidien.",exploreBtn:"Explorer les Écritures",dailyBtn:"La méditation du jour",heroNote:"Pour les cœurs curieux et une foi qui grandit.",verseLabel:"UNE PAROLE À GARDER",todayVerse:"LE VERSET DU JOUR",verseText:"« L’Éternel est ma force et mon bouclier ; en lui mon cœur se confie, et je suis secouru. »",
    exploreEyebrow:"OUVRIR LA PAROLE",exploreTitle:"Explorer la <em>Bible</em>",exploreText:"Commencez par un livre, un thème ou une question. Il y a toujours quelque chose à découvrir.",cardBooks:"Les livres de la Bible",cardBooksText:"Rencontrez les personnes, les lieux et les récits qui façonnent l’histoire biblique.",cardThemes:"Thèmes & sujets",cardThemesText:"Explorez la foi, l’espérance, le pardon et les grandes questions de la vie.",cardPlans:"Parcours de lecture",cardPlansText:"Créez un rythme régulier grâce à des parcours guidés dans les Écritures.",
    studyEyebrow:"ALLER PLUS LOIN",studyTitle:"Lisez avec curiosité.<br><em>Comprenez le contexte.</em>",studyText:"L’étude biblique invite aux questions, relie les idées et aide la Parole à éclairer la vie réelle. Notre bibliothèque d’études est en préparation.",studyBtn:"Découvrir les ressources ↗",devEyebrow:"UN MOMENT AVEC DIEU",devTitle:"Faire une pause. Réfléchir. <em>Grandir.</em>",devIntro:"Un petit espace dans votre journée peut ouvrir la voie à une perspective plus profonde.",dailyReflection:"MÉDITATION DU JOUR",devHeading:"La force pour le prochain pas",devText:"Vous n’avez pas besoin de voir tout le chemin pour faire le prochain pas avec foi. Demandez à Dieu la force nécessaire pour aujourd’hui, et laissez demain venir en son temps.",
    prayerEyebrow:"VOUS POUVEZ TOUT LUI CONFIER",prayerTitle:"Un lieu paisible<br>pour <em>prier.</em>",prayerText:"Joie, questions, gratitude, inquiétude. Quel que soit ce que vous portez, prenez un instant pour le présenter à Dieu.",prayerBtn:"Prendre un moment de prière ↗",prayerPromptLabel:"UNE PRIÈRE SIMPLE",prayerPromptText:"Seigneur, rencontre-moi dans cet instant. Donne-moi un cœur attentif, une foi ferme et la sagesse pour le prochain pas. Amen.",close:"Fermer ×",
    resourcesEyebrow:"CONTINUER À EXPLORER",resourcesTitle:"La foi au <em>quotidien.</em>",resourcesText:"Des ressources pratiques pour continuer à apprendre et à grandir.",resourceOne:"Guides de lecture biblique",resourceOneText:"Des idées simples pour créer un rythme de lecture enrichissant.",resourceTwo:"Questions de foi",resourceTwoText:"Des pistes de réflexion pour des conversations sincères.",resourceThree:"Voir & écouter",resourceThreeText:"Enseignements vidéo et encouragements audio bientôt disponibles.",watchEyebrow:"HISTOIRES EN VIDÉO",watchTitle:"Des histoires qui donnent vie<br><em>aux Écritures.</em>",watchText:"Découvrez ces courtes histoires en vidéo et laissez la Parole prendre vie. De nouvelles vidéos pourront être ajoutées ici.",footerText:"Un espace pour découvrir les Écritures et grandir dans la foi."
  }
};
let currentLang = "en";
document.getElementById("languageToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "fr" : "en";
  document.documentElement.lang = currentLang;
  document.getElementById("languageToggle").textContent = currentLang === "en" ? "FR" : "EN";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (currentLang === "en") {
      el.innerHTML = el.dataset.english || el.getAttribute("data-original") || el.innerHTML;
    } else if (translations.fr[key]) {
      if (!el.dataset.english) el.dataset.english = el.innerHTML;
      el.innerHTML = translations.fr[key];
    }
  });
});
document.querySelectorAll("[data-i18n]").forEach(el => el.dataset.english = el.innerHTML);
document.getElementById("prayerButton").addEventListener("click", () => document.getElementById("prayerPrompt").classList.add("show"));
document.getElementById("closePrayer").addEventListener("click", () => document.getElementById("prayerPrompt").classList.remove("show"));
document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a => a.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open")));
