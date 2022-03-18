console.log('[+]Смена изображений в секции portfolio +25\nпри кликах по кнопкам отображаются изображения из папки с соответствующим названием +20\nкнопка, по которой кликнули, становится активной. Другие кнопки при этом будут неактивными +5\n[+]Перевод страницы на два языка +25\nпри клике по надписи ru англоязычная страница переводится на русский язык +10\nпри клике по надписи en русскоязычная страница переводится на английский язык +10\nнадписи en или ru, соответствующие текущему языку страницы, становятся активными +5\n[+]Переключение светлой и тёмной темы +25\nтёмная тема приложения сменяется светлой +10\nсветлая тема приложения сменяется тёмной +10\nпосле смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5\n[+]Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\n[-]Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +0');
const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text-1-1': 'Save sincere emotions, romantic feelings and',
      'hero-text-1-2' : 'happy moments of life together with professional',
      'hero-text-1-3' : 'photographer Alexa Rise',
      'hero-text-2-1' : 'Save sincere emotions, romantic feelings',
      'hero-text-2-2' : 'and happy moments of life together with',
      'hero-text-2-3' : 'professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1-1': 'High-quality photos in the studio',
      'skill-text-1-2': 'and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2-1': 'Capture your moments so that they always',
      'skill-text-2-2': 'stay with you',
      'skill-title-3': 'Retouch',
      'skill-text-3-1': 'I strive to make photography',
      'skill-text-3-2': 'surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4-1': 'Professional sounds recording',
      'skill-text-4-2': 'for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'email': 'E-mail',
      'phone': 'phone',
      'message': 'Message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text-1-1': 'Сохраните искренние эмоции, романтические',
      'hero-text-1-2' : 'переживания и счастливые моменты жизни',
      'hero-text-1-3' : 'вместе с профессиональным фотографом',
      'hero-text-2-1' : 'Сохраните искренние эмоции, романтические',
      'hero-text-2-2' : 'переживания и счастливые моменты жизни',
      'hero-text-2-3' : 'вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1-1': 'Высококачественные фото',
      'skill-text-1-2': 'в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2-1': 'Запечатлите лучшие моменты,',
      'skill-text-2-2': 'чтобы они всегда были с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3-1': 'Я стремлюсь к тому, чтобы',
      'skill-text-3-2': 'фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4-1': 'Профессиональная запись звука',
      'skill-text-4-2': 'для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна или две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации или больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'email': 'Почта',
      'phone': 'Телефон',
      'message': 'Сообщение'
    }
}

let theme = "dark";
let lang = "en";
const ham = document.querySelector(".ham");
const portfolioButtons = document.querySelectorAll(".portfolio-button");
const portfolioPictures = document.querySelectorAll(".portlolio-picture");
const seasons = ["winter", "spring", "summer", "autumn"];
const sun = document.querySelectorAll(".sun");
const moon = document.querySelector(".moon");
const header = document.querySelector("header");
const hero = document.getElementById("hero");
const contacts = document.getElementById("contacts");
const titles = document.querySelectorAll(".section-title");
const footers = document.querySelectorAll(".footer-logo");

function preloadImages(season) {
    for(let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/portfolio/${season}/${i}.jpg`;
    }
}

function getTranslate(lang) {
    document.querySelectorAll("[data-i18]").forEach(el => {
        el.textContent = i18Obj[lang][el.dataset.i18];
        if (el.placeholder) {
            el.placeholder = i18Obj[lang][el.dataset.i18];
            el.textContent = "";
        }
    });
}

function changeTheme(theme) {
    if (theme === "light") { //меняем на светлую        
        document.documentElement.style.setProperty('--black', '#ffffff');
        document.documentElement.style.setProperty('--white', '#1c1c1c');
        sun.forEach(el => el.classList.add("light"));
        moon.classList.remove("light");
        header.classList.add("light");
        hero.classList.add("light");
        contacts.classList.add("light");
        titles.forEach(el => el.classList.add("light"));
        document.querySelectorAll(".switcher").forEach(el => el.classList.add("light"));
        portfolioButtons.forEach(el => el.classList.add("light"));
        footers.forEach(el => el.classList.add("light"));
    }
    if (theme === "dark") { //меняем на тёмную        
        document.documentElement.style.setProperty('--black', '#000000');
        document.documentElement.style.setProperty('--white', '#ffffff');        
        sun.forEach(el => el.classList.remove("light"));
        moon.classList.add("light");
        header.classList.remove("light");
        hero.classList.remove("light");
        contacts.classList.remove("light");
        titles.forEach(el => el.classList.remove("light"));
        document.querySelectorAll(".switcher").forEach(el => el.classList.remove("light"));
        portfolioButtons.forEach(el => el.classList.remove("light"));
        footers.forEach(el => el.classList.remove("light"));
    }
}

function setLocalStorage() {
    localStorage.setItem('theme', theme);
    localStorage.setItem('lang', lang);
}

function getLocalStorage() {
    if (localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang');
        getTranslate(lang);
        document.querySelectorAll('.switcher').forEach(el => el.classList.remove('active'));
        document.getElementById(lang).classList.add('active');
    }
    if(localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
        changeTheme(theme);
    }
}

document.addEventListener("DOMContentLoaded", function() {   
    seasons.forEach(preloadImages);
    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('load', getLocalStorage);
    ham.addEventListener('click', function menuOpenClose() {
        document.querySelector(".ham").classList.toggle("active");
        document.querySelectorAll(".nav-sidebar").forEach(el => el.classList.toggle("open"));
        document.querySelectorAll(".crutch").forEach(el => el.classList.toggle("open"));
        document.querySelectorAll(".nav-container").forEach(el => el.classList.toggle("open"));
    });
    document.querySelectorAll(".nav-link").forEach(el => el.addEventListener('click', function closeMenuByClickOnNavItem() {
        document.querySelector(".ham").classList.remove("active");
        document.querySelectorAll(".nav-sidebar").forEach(el => el.classList.remove("open"));
        document.querySelectorAll(".crutch").forEach(el => el.classList.remove("open"));
        document.querySelectorAll(".nav-container").forEach(el => el.classList.remove("open"));
    }));
    ham.addEventListener('mouseover', function hamHover() {
        ham.classList.add("hover");
    });
    ham.addEventListener('mouseout', function hamHover() {
        ham.classList.remove("hover");
    });
    document.querySelectorAll(".line").forEach(el => el.addEventListener('mouseover', function hamHover() {
        ham.classList.add("hover");
    }));
    document.querySelector(".portfolio-buttons").addEventListener('click', function changeSeason(event) {
        if (event.target.classList.contains("portfolio-button")) {
            portfolioPictures.forEach((img, index) => img.src = `./assets/img/portfolio/${event.target.dataset.season}/${index + 1}.jpg`);
            portfolioButtons.forEach(but => but.classList.remove("active"));
            event.target.classList.add("active");
        }
    });
    document.querySelector(".theme-switcher").addEventListener('click', function(event) {
        if (event.target.classList.contains("sun")) {
            theme = "light";
            document.documentElement.style.setProperty('--black', '#000000');
            document.documentElement.style.setProperty('--white', '#ffffff')
        }
        if (event.target.classList.contains("moon")) {
            theme = "dark";
            document.documentElement.style.setProperty('--black', '#ffffff');
            document.documentElement.style.setProperty('--white', '#1c1c1c');
        }
        changeTheme(theme);
    });
    document.querySelector(".switcher-container").addEventListener('click', function(event) {
        if (event.target.classList.contains("switcher")) {
            getTranslate(event.target.dataset.lang);
            document.querySelectorAll(".switcher").forEach(el => el.classList.remove("active"));
            event.target.classList.add("active");
            if (lang === 'en') {
                lang = 'ru';
            } else if (lang === 'ru') {
                lang = 'en';
            }
        }
    });
  });

