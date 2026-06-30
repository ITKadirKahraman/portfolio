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

function openSlideOverPanel() {
    const buttons = document.querySelectorAll(".navigation button");

    buttons.forEach( button => {
        button.addEventListener("click", () => {
            openPanel(button.dataset.panel);
        })
    });
}

function openPanel(panel) {
    const slideOver = document.getElementById('slideOver');

    switch(panel) {
        case "projects":
            slideOver.innerHTML = getProjects();
            break;
        case "skills":
            slideOver.innerHTML = getSkliss();
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