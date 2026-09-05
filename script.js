/* ==========================================================================
   Carolina — pianist portfolio (template)
   Vanilla JS: i18n, mobile nav, data-driven cards, lightbox, reveal animations.
   ========================================================================== */

"use strict";

/* --------------------------------------------------------------------------
   Translation dictionary — add keys here; reference via data-i18n in HTML
   -------------------------------------------------------------------------- */
const TRANSLATIONS = {
  en: {
    skip: "Skip to main content",
    brand: "Carolina",
    "nav.about": "About",
    "nav.achievements": "Achievements",
    "nav.gallery": "Gallery",
    "nav.videos": "Videos",
    "nav.contact": "Contact",
    "hero.subtitle": "Pianist • Performer • Competition Participant",
    "hero.name": "Carolina",
    "hero.intro":
      "Placeholder introduction text. A short, warm paragraph about Carolina's journey in music will live here.",
    "hero.cta": "View achievements",
    "hero.photoAlt": "Photo placeholder: Carolina's future portrait",
    "hero.photoLabel": "Photo placeholder — future portrait",
    "about.title": "About me",
    "chip.demo": "Demo content",
    "about.bio1":
      "This is placeholder biography text. Replace it with Carolina's real story — how she began playing the piano, her teachers, her favourite repertoire and what performing means to her.",
    "about.bio2":
      "A second placeholder paragraph can describe her musical personality, practice routine and dreams for the stage.",
    "about.statYears": "Years of music",
    "about.statPerformances": "Performances",
    "about.statCompetitions": "Competitions",
    "about.statsNote": "Demo data — numbers shown are placeholders.",
    "about.photoAlt": "Photo placeholder: Carolina during a lesson or performance",
    "about.photoLabel": "Photo placeholder",
    "ach.title": "Achievements",
    "ach.sub": "Competition results and festival participations.",
    "ach.1.name": "International Online Piano Competition (USA)",
    "ach.1.date": "February 2023",
    "ach.1.award": "Grand Prix",
    "ach.1.loc": "USA, online",
    "ach.2.name": "Warsaw Selection Round of the 17th All-Ukrainian Festival of Modern Song and Popular Music “Chervona Ruta”",
    "ach.2.date": "26 October 2024",
    "ach.2.award": "Official reserve of the festival",
    "ach.2.loc": "Warsaw, Poland",
    "ach.2.note": "Category: popular music",
    "ach.3.name": "Lang Lang International Music Foundation — “The Season of Excellence Celebration”",
    "ach.3.date": "—",
    "ach.3.award": "2nd Prize",
    "ach.3.loc": "Steinway Hall, London, United Kingdom",
    "ach.3.note": "Senior Division",
    "ach.4.name": "«Paris: Talents d'Europe»",
    "ach.4.date": "—",
    "ach.4.award": "Participation",
    "ach.4.loc": "France",
    "ach.4.note": "10th season of the European talent competition",
    "ach.5.name": "Internal Academic Piano Competitions",
    "ach.5.date": "—",
    "ach.5.award": "2nd place",
    "ach.5.loc": "Music academy (internal competition)",
    "ach.6.name": "«PIANO ART VICTORY»",
    "ach.6.date": "—",
    "ach.6.award": "—",
    "ach.6.loc": "Online",
    "ach.6.note": "Result not yet available",
    "gal.title": "Gallery",
    "gal.sub": "Placeholder photos — real images can be added later. Click a tile to preview.",
    "vid.title": "Videos",
    "vid.sub": "Video embeds (e.g. YouTube) will appear here later — placeholders for now.",
    "contact.title": "Contact",
    "contact.sub": "Placeholder links — real profiles will be connected later.",
    "contact.email": "Email",
    "footer.rights": "All rights reserved.",
    "lightbox.close": "Close preview",
    "lightbox.open": "Open image preview",
    "gallery.imgAlt": "Photo placeholder",
    "video.thumbAlt": "Video placeholder",
  },
  ua: {
    skip: "Перейти до основного вмісту",
    brand: "Carolina",
    "nav.about": "Про мене",
    "nav.achievements": "Досягнення",
    "nav.gallery": "Галерея",
    "nav.videos": "Відео",
    "nav.contact": "Контакти",
    "hero.subtitle": "Піаністка • Виконавиця • Учасниця конкурсів",
    "hero.name": "Carolina",
    "hero.intro":
      "Приклад вступного тексту. Тут буде короткий теплий абзац про музичний шлях Кароліни.",
    "hero.cta": "Переглянути досягнення",
    "hero.photoAlt": "Заповнювач фото: майбутній портрет Кароліни",
    "hero.photoLabel": "Заповнювач фото — майбутній портрет",
    "about.title": "Про мене",
    "chip.demo": "Демо-контент",
    "about.bio1":
      "Це приклад біографії. Замініть його реальною історією Кароліни — як вона почала грати на піаніно, її вчителі, улюблений репертуар і що для неї означає сцена.",
    "about.bio2":
      "Другий абзац-заповнювач може описувати її музичну натуру, заняття музикою та мрії про сцену.",
    "about.statYears": "Років у музиці",
    "about.statPerformances": "Виступів",
    "about.statCompetitions": "Конкурсів",
    "about.statsNote": "Демонстраційні дані — наведені числа є заповнювачами.",
    "about.photoAlt": "Заповнювач фото: Кароліна під час заняття чи виступу",
    "about.photoLabel": "Заповнювач фото",
    "ach.title": "Досягнення",
    "ach.sub": "Результати конкурсів та участь у фестивалях.",
    "ach.1.name": "Міжнародний онлайн-конкурс піаністів (США)",
    "ach.1.date": "Лютий 2023",
    "ach.1.award": "Grand Prix",
    "ach.1.loc": "США, онлайн",
    "ach.2.name": "Варшавський відбірковий конкурс XVII Всеукраїнського фестивалю сучасної пісні та популярної музики «Червона Рута»",
    "ach.2.date": "26 жовтня 2024",
    "ach.2.award": "Офіційний резерв фестивалю",
    "ach.2.loc": "Варшава, Польща",
    "ach.2.note": "Категорія: популярна музика",
    "ach.3.name": "Lang Lang International Music Foundation — «The Season of Excellence Celebration»",
    "ach.3.date": "—",
    "ach.3.award": "Друга премія",
    "ach.3.loc": "Steinway Hall, Лондон, Велика Британія",
    "ach.3.note": "Старша вікова категорія",
    "ach.4.name": "«Paris: Talents d'Europe»",
    "ach.4.date": "—",
    "ach.4.award": "Участь",
    "ach.4.loc": "Франція",
    "ach.4.note": "10-й сезон європейського конкурсу талантів",
    "ach.5.name": "Внутрішні академічні фортепіанні конкурси",
    "ach.5.date": "—",
    "ach.5.award": "2-ге місце",
    "ach.5.loc": "Музична академія (внутрішній конкурс)",
    "ach.6.name": "«PIANO ART VICTORY»",
    "ach.6.date": "—",
    "ach.6.award": "—",
    "ach.6.loc": "Онлайн",
    "ach.6.note": "Результат поки невідомий",
    "gal.title": "Галерея",
    "gal.sub": "Заповнювачі фото — реальні зображення можна додати пізніше. Натисніть на плитку для перегляду.",
    "vid.title": "Відео",
    "vid.sub": "Пізніше тут з'являться відео (наприклад, YouTube) — поки що заповнювачі.",
    "contact.title": "Контакти",
    "contact.sub": "Заповнювачі посилань — реальні профілі будуть підключені пізніше.",
    "contact.email": "Електронна пошта",
    "footer.rights": "Усі права захищено.",
    "lightbox.close": "Закрити перегляд",
    "lightbox.open": "Відкрити перегляд зображення",
    "gallery.imgAlt": "Заповнювач фото",
    "video.thumbAlt": "Заповнювач відео",
  },
};

/* --------------------------------------------------------------------------
   Data arrays — to add content later, append objects here.
   -------------------------------------------------------------------------- */

/* Real achievements. Each item pulls its text from ach.<id>.* translation
   keys — to add one, append an object here and add matching keys. */
const ACHIEVEMENTS = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4, participation: true }, // "Участь" — not an award/ranking
  { id: 5 },
  { id: 6 },
];

/* placeholder: demo gallery; point "img" at real files in assets/ later */
const GALLERY = [
  { img: null, caption: "Demo — recital photo 1" },
  { img: null, caption: "Demo — recital photo 2" },
  { img: null, caption: "Demo — competition moment" },
  { img: null, caption: "Demo — backstage photo" },
  { img: null, caption: "Demo — with the piano" },
  { img: null, caption: "Demo — master class photo" },
  { img: null, caption: "Demo — award ceremony" },
  { img: null, caption: "Demo — ensemble performance" },
];

/* placeholder: demo videos; add "embed" (YouTube URL) per item later */
const VIDEOS = [
  { title: "Demo — Performance recording 1", duration: "3:42", embed: null },
  { title: "Demo — Performance recording 2", duration: "5:18", embed: null },
  { title: "Demo — Performance recording 3", duration: "4:05", embed: null },
];

/* --------------------------------------------------------------------------
   Small SVG snippets used by placeholders (no external images needed)
   -------------------------------------------------------------------------- */
const SVG_NOTE = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#c9b8a6" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>`;
const SVG_CAMERA = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#c9b8a6" d="M9 3l-1.8 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.2L15 3H9zm3 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/></svg>`;
const SVG_PLAY = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#a97575" d="M8 5v14l11-7z"/></svg>`;

/* --------------------------------------------------------------------------
   i18n helpers
   -------------------------------------------------------------------------- */
const langButtons = { en: document.getElementById("langEn"), ua: document.getElementById("langUa") };

function t(key) {
  const lang = document.documentElement.lang || "en";
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.en[key] || key;
}

function applyTranslations() {
  const lang = document.documentElement.lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  Object.entries(langButtons).forEach(([code, btn]) => {
    if (btn) btn.setAttribute("aria-pressed", String(code === lang));
  });
}

function setLang(lang) {
  document.documentElement.lang = lang;
  try {
    localStorage.setItem("carolina-lang", lang);
  } catch (_) {
    /* storage unavailable (file:// private mode) — non-fatal */
  }
  applyTranslations();
  renderAll();
}

/* --------------------------------------------------------------------------
   Rendering — achievements / gallery / videos
   -------------------------------------------------------------------------- */
function renderAchievements() {
  const grid = document.getElementById("achievementsGrid");
  if (!grid) return;
  grid.innerHTML = ACHIEVEMENTS.map((a) => {
    const k = `ach.${a.id}.`;
    const noteKey = `${k}note`;
    const note = noteKey in TRANSLATIONS.en ? t(noteKey) : ""; // optional per item
    return `
    <article class="ach-card">
      <span class="ach-year">${t(`${k}date`)}</span>
      <h3 class="ach-name">${t(`${k}name`)}</h3>
      <span class="ach-award${a.participation ? " ach-award--soft" : ""}">${t(`${k}award`)}</span>
      <p class="ach-location">${t(`${k}loc`)}</p>
      ${note ? `<p class="ach-note">${note}</p>` : ""}
    </article>`;
  }).join("");
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = GALLERY.map(
    (g, i) => `
    <button class="gallery-item" type="button" data-index="${i}" aria-label="${g.caption} — ${t("lightbox.open")}">
      <span class="gallery-media" aria-hidden="true">
        ${SVG_CAMERA}
        <span class="gallery-label">${g.caption}</span>
      </span>
    </button>`
  ).join("");
}

function renderVideos() {
  const grid = document.getElementById("videosGrid");
  if (!grid) return;
  grid.innerHTML = VIDEOS.map(
    (v) => `
    <article class="video-card">
      <div class="video-thumb" role="img" aria-label="${t("video.thumbAlt")}: ${v.title}">
        <span class="video-play">${SVG_PLAY}</span>
      </div>
      <div class="video-meta">
        <h3 class="video-title">${v.title}</h3>
        <p class="video-note">${v.duration} — demo</p>
      </div>
    </article>`
  ).join("");
}

function renderAll() {
  renderAchievements();
  renderGallery();
  renderVideos();
}

/* --------------------------------------------------------------------------
   Lightbox (gallery preview)
   -------------------------------------------------------------------------- */
const lightbox = document.getElementById("lightbox");
const lightboxMedia = document.getElementById("lightboxMedia");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
let lastFocused = null;

function openLightbox(item) {
  const data = GALLERY[Number(item.dataset.index)];
  if (!data) return;
  lastFocused = document.activeElement;

  if (data.img) {
    // Real image path (assets/…): show <img>
    lightboxMedia.innerHTML = `<img src="${data.img}" alt="${data.caption}" />`;
  } else {
    // Placeholder: show soft gradient + note
    lightboxMedia.className = "lightbox-media";
    lightboxMedia.innerHTML = `${SVG_NOTE}<span class="photo-label">${t("gallery.imgAlt")}</span>`;
  }
  lightboxCaption.textContent = data.caption;
  lightbox.hidden = false;
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxMedia.innerHTML = "";
  if (lastFocused) lastFocused.focus();
}

document.addEventListener("click", (e) => {
  const item = e.target.closest(".gallery-item");
  if (item) openLightbox(item);
  if (e.target === lightbox) closeLightbox();
});

lightboxClose.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

/* --------------------------------------------------------------------------
   Mobile navigation
   -------------------------------------------------------------------------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

// Close mobile menu when a link is chosen
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* --------------------------------------------------------------------------
   Scroll reveal (respects prefers-reduced-motion)
   -------------------------------------------------------------------------- */
function initReveal() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => io.observe(el));
}

/* --------------------------------------------------------------------------
   Footer year + language init
   -------------------------------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();

(function initLang() {
  let saved = null;
  try {
    saved = localStorage.getItem("carolina-lang");
  } catch (_) {
    /* ignore */
  }
  const browserLang = (navigator.language || "en").toLowerCase().startsWith("uk") ? "ua" : "en";
  setLang(saved === "ua" || saved === "en" ? saved : browserLang);
})();

Object.entries(langButtons).forEach(([code, btn]) => {
  if (btn) btn.addEventListener("click", () => setLang(code));
});

initReveal();
