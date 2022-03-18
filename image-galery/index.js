console.log('Итого +70\n[+] Вёрстка +10\nна странице есть несколько фото и строка поиска +5\nв футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n[+] При загрузке приложения на странице отображаются полученные от API изображения +10\n[+] Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10\n[+] Поиск +30\nпри открытии приложения курсор находится в поле ввода +5\nесть placeholder +5\nавтозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5\nпоисковый запрос можно отправить нажатием клавиши Enter +5\nпосле отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5\nв поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5\n[+] Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\nувеличение фото по клику и обратно\nкнопка Наверх\nкнопка Показать больше фото');

let url, search = 'nature', page = 1;
const body = document.querySelector('body');
const photosContainer = document.querySelector('.photos-container');
const input = document.querySelector('.input');
const searchBtn = document.querySelector('.search-button');
const moreBtn = document.querySelector('.more-btn');
const big = document.querySelector('.big-container');
const topBtn = document.querySelector('.button-to-top');

function showPhotos(data) {
    for(const elem of data.photos.photo) {
        const img = document.createElement('div');
        img.classList.add('photo');
        if(elem.url_l === undefined) {
            img.style.backgroundImage = 'url(' + elem.url_m + ')';
        } else {
            img.style.backgroundImage = 'url(' + elem.url_l + ')';
        }
        img.alt = 'image';
        photosContainer.append(img);
    };
};

async function getPhotos(search, page) {
    url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=${search}&tag_mode=all&extras=url_m,url_l&format=json&nojsoncallback=1&orientation=landscape&media=photos&page=${page}&per_page=10`;
    const res = await fetch(url);
    const photos = await res.json();
    showPhotos(photos);
};

input.addEventListener('keydown', function(event) {
    if(event.keyCode === 13) {           
        search = input.value;
        page = 1;
        event.preventDefault();
        searchBtn.click();
    }
});

searchBtn.addEventListener('click', function() {
    const gallery = document.querySelectorAll('.photo');
    gallery.forEach(el => el.remove());
    getPhotos(search, page);
});

photosContainer.addEventListener('click', function(event) {
    if(event.target.classList.contains('photo')) {
        body.classList.toggle('big');
        document.querySelector('.big-container').classList.toggle('big');
        document.querySelector('.big-container').style.backgroundImage = event.target.style.backgroundImage;
    }
});

big.addEventListener('click', function() {
    document.querySelector('.big-container').classList.toggle('big');
    body.classList.toggle('big');
});

moreBtn.addEventListener('click', function() {
    page++;
    getPhotos(search, page);
});

topBtn.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
});

getPhotos(search, page);

