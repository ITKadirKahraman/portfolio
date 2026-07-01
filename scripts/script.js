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
    mouseEffect();
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

function openPanel(panel) {
    const slideOver = document.getElementById('slideOver');

    switch(panel) {
        case "projects":
            slideOver.innerHTML = getProjects();
            break;
        case "skills":
            slideOver.innerHTML = getSkills();
            break;
        case "experience":
            slideOver.innerHTML = getExperience();
            break;
        case "contact":
            slideOver.innerHTML = getContact();
            break;
        default:
            break;
    }

    slideOver.classList.add("open");
}

function mouseEffect() {
    const buttons = document.querySelectorAll(".rightButton");

    buttons.forEach(button => {
        button.addEventListener("mousemove", e => {
            const rect = button.getBoundingClientRect();
            button.style.setProperty("--x", e.clientX - rect.left);
            button.style.setProperty("--y", e.clientY - rect.top);
        });
    });
}

function closeCard() {
    let cardClose = document.getElementById('card');
    cardClose.style.display = 'none';
    renderRightSide();
}