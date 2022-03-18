console.log('[+]Вёрстка +10\nреализован интерфейс игры +5\nв футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n[+]Логика игры. Карточки, по которым кликнул игрок, переворачиваются согласно правилам игры +10\n[+]Игра завершается, когда открыты все карточки +10\n[+]По окончанию игры выводится её результат - количество ходов, которые понадобились для завершения игры +10\n[+]Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой сохраняются результаты предыдущих 10 игр +10\n[+]По клику на карточку – она переворачивается плавно, если пара не совпадает – обе карточки так же плавно переварачиваются рубашкой вверх +10\n[+]Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\nВвод имени\nКнопка новой игры\nПоказ результатов в любой момент\nСменить имя в любой момент\nСброс таблицы результатов');

const body = document.querySelector('body');
const newGameButton = document.querySelector('.new-game-button');
const nameSectionButton = document.querySelector('.name-section-button');
const showResultsButton = document.querySelector('.show-results-button');
const resetButton = document.querySelector('.reset-button');
const closeButtons = document.querySelectorAll('.close-button');
const nameSection = document.querySelector('.name-section');
const input = document.querySelector('input');
const setNameButton = document.querySelector('.set-name-button');
const cards = document.querySelectorAll('.card');
const results = document.querySelector('.results');
const resultsBody = document.querySelector('.results-body');
const userResultContainer = document.querySelector('.user-result-container');
const userResult = document.querySelector('.user-result');
let hasTurnedFirst = false, hasTurnedSecond = false;
let username = 'noname', moves;
let resultsObject;
let firstCard, secondCard;

function setLocalStorage () {
    localStorage.setItem('resultsObject', JSON.stringify(resultsObject));
}

function getLocalStorage () {
    if (localStorage.getItem('resultsObject')) {
        var localObj = localStorage.getItem('resultsObject');
        resultsObject = JSON.parse(localObj);
    } else {
        resultsObject = [];
    }
}

(function startGame () {
    getLocalStorage ();
    newGame ();
    body.classList.add('open-menu');
})();

function closeNameSection () {
    nameSection.classList.add('hidden');
    body.classList.remove('open-menu');
}

function newGame () {
    closeResults ();
    resetTable ();
    shuffle ();
    cards.forEach(card => {
        card.classList.remove('turned');
        card.addEventListener('click', turnOver);
        moves = 0;
    });
}

function renderTableOfResults () {
    document.querySelectorAll('.results-row').forEach(elem => elem.remove());
    resultsObject.map(elem => render (elem));
}

function render (elem) {
    const tr = document.createElement('tr');
    tr.classList.add('results-row');
    tr.style.order = elem.moves;
    const tdName = document.createElement('td');
    tdName.classList.add('results-name');
    if (elem.isLast) {
        tdName.classList.add('in-the-end');
    }
    tdName.append(elem.name);
    const tdResult = document.createElement('td');
    tdResult.classList.add('results-moves');
    if (elem.isLast) {
        tdResult.classList.add('in-the-end');
    }
    tdResult.append(elem.moves);
    tr.append(tdName, tdResult);
    resultsBody.append(tr);
}

function shuffle () {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 12);
        card.style.order = random;
    });
}

function turnOver () {
    if (hasTurnedSecond || this === firstCard) {
        return;
    }
    this.classList.add('turned');
    if (!hasTurnedFirst) {
        hasTurnedFirst = true;
        firstCard = this;
    } else {
        hasTurnedSecond = true;
        secondCard = this;
        checkCardsForMatch ();
        endOfGame ();
    }
}

function checkCardsForMatch () {
    let isMatch = firstCard.dataset.picture === secondCard.dataset.picture;
    isMatch ? disableCards () : unturn ();
}

function disableCards () {
    firstCard.removeEventListener('click', turnOver);
    secondCard.removeEventListener('click', turnOver);
    nextTour ();
}

function unturn () {
    window.setTimeout(() => {
        firstCard.classList.remove('turned');
        secondCard.classList.remove('turned');
        nextTour ();
    }, 1000);
}

function nextTour () {
    [hasTurnedFirst, hasTurnedSecond] = [false, false];
    [firstCard, secondCard] = [null, null];
    moves++;
}

function endOfGame () {
    let turnedCards = document.querySelectorAll('.turned');
    if (turnedCards.length === 12) {
        window.setTimeout(() => {
            userResult.innerHTML = moves;
            addToResultsObject ();
            cutResultsTo10 ();
            renderTableOfResults ();
            userResultContainer.classList.add('visible');
            results.classList.add('visible');
            body.classList.add('open-menu');
        }, 200);
    }
}

function addToResultsObject () {
    const result = { name: username, moves: moves, isLast: true }
    resultsObject.push(result);
}

function cutResultsTo10 () {
    if (resultsObject.length > 10) {
        resultsObject.sort((a, b) => a.moves - b.moves || b.isLast - a.isLast);
        resultsObject.splice(10);
    }
}

function resetTable () {
    userResultContainer.classList.remove('visible');
    resultsObject.forEach(elem => elem.isLast = false);
    renderTableOfResults ();
}

function showResults () {
    results.classList.toggle('visible');
    body.classList.add('open-menu');
}

function closeResults () {
    nameSection.classList.remove('visible');
    results.classList.remove('visible');
    body.classList.remove('open-menu');
}

window.addEventListener('beforeunload', () => {
    setLocalStorage ();
});

newGameButton.addEventListener('click', () => {
    newGame ();
    closeNameSection ();
});

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        setNameButton.click();
    }
});

setNameButton.addEventListener('click', () => {
    if (input.value) {
        username = input.value;
    } else {
        username = 'noname';
    }
    closeNameSection ();
});

showResultsButton.addEventListener('click', () => {
    if (results.classList.contains('visible')) {
        closeResults ();
    } else {
        showResults ();
    }
});

resetButton.addEventListener('click', () => {
    resultsObject = [];
    renderTableOfResults ();
})

closeButtons.forEach(closeButton => closeButton.addEventListener('click', () => {
    closeResults ();
    closeNameSection ();
}));

nameSectionButton.addEventListener('click', () => {
    nameSection.classList.toggle('hidden');
    body.classList.toggle('open-menu');
});


