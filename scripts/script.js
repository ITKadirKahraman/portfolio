function init() {
    renderLeftSide();
    renderRightSide();
}

function renderLeftSide() {
    document.getElementById('aboutMe').innerHTML = getAboutMeSection();
}

function getCard() {
    document.getElementById('cards').innerHTML = getCards();
}

function renderRightSide() {
    document.getElementById('explore').innerHTML = getExploreSection();
}

const button = document.getElementById('openDialog');
    const dialog = document.getElementById('meinDialog');

    button.addEventListener('click', () => {
        dialog.showModal(); // Öffnet das Fenster
    });