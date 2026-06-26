function init() {
    renderLeftSide();
    renderRightSide();
}

function renderLeftSide() {
    document.getElementById('aboutMe').innerHTML = getAboutMeSection();
}

function getCard() {
    document.getElementById('cards').innerHTML = getCards();
    arrow();
}

function renderRightSide() {
    document.getElementById('explore').innerHTML = getExploreSection();
}

function arrow() {
    let arrowPrev = document.getElementById('prev');
    let arrowNext = document.getElementById('next');
    let cards = document.querySelectorAll('.cardSection');

    arrowPrev.addEventListener('click', () => {
        console.log('Vorherige Card');
    });

    arrowNext.addEventListener('click', () => {
        console.log('Nächste Card');
    });
}