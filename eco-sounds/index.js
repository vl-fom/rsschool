console.log('Итого +60\n[+] Вёрстка +10\nесть не меньше пяти интерактивных элементов, с которыми пользователи могут взаимодействовать. Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации +5\nв футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n[+] При кликах по интерактивным элементам меняется изображение +10\n[+] При кликах по интерактивным элементам меняется звук +10\n[+] Активный в данный момент интерактивный элемент выделяется стилем +10\n[+] Кнопка Play/Pause +20\nесть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10\nвнешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук +10');

const birdNames = ['forest', 'solovey', 'zaryanka', 'javoronok', 'slavka', 'drozd'];
const birds = document.querySelector('.birds');
const bird = document.querySelectorAll('.button-bird');
const main = document.querySelector('main');
const playButton = document.querySelector('.play-button');
let audio = new Audio();
let isPlay = false;

function preloadImages(bird) {
    for(let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/${bird}.jpg`;
    }
}

function playAudioByBird(bird) {
    audio.src = `./assets/audio/${bird}.mp3`
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    main.classList.remove('forest', 'solovey', 'zaryanka', 'javoronok', 'slavka', 'drozd');
    main.classList.add(bird);
    playButton.classList.add('play');
}

function audioPlayPause() {
    if(!isPlay) {
        audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
    }
    playButton.classList.toggle('play');
}

document.addEventListener('DOMContentLoaded', function() {
    birdNames.forEach(el => preloadImages(el));
    birds.addEventListener('click', function(event) {
        if (event.target.classList.contains('button-bird')) {
            playAudioByBird(event.target.dataset.bird);
            bird.forEach(el => el.classList.remove('play'));
            event.target.classList.add('play');
            
        }
    });
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('play-button')) {
            if (main.classList.length === 1) {
                playAudioByBird('forest');
                bird[0].classList.add('play');
            } else {
                audioPlayPause();
            }
        }
    });
});