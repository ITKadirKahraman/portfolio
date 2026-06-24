function init() {
    renderLeftSide();
}

function renderLeftSide() {
    document.getElementById('aboutMe').innerHTML = getAboutMeSection();
}

function getCard() {
    document.getElementById('cards').innerHTML = getCards();
}