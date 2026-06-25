function getAboutMeSection() {
    return `
        <h1 data-hover="KK"></h1>
        <section class="photoTextSection">
            <img class="photo" src="./assets/img/kadir.JPG" alt="Kadir Kahraman">
            <h2 data-hover="about M E"></h2>
            <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque repellendus deleniti maiores dolor ipsa nobis sed incidunt minima similique unde, dolores veniam vel, at tempora numquam ratione doloribus. Voluptatem eveniet alias odio vitae consectetur repellat provident quisquam quis neque rem saepe impedit a dicta consequuntur voluptas, veritatis eos dolorum explicabo qui, illo reprehenderit ea aut obcaecati. Modi molestiae quae pariatur porro laboriosam magni rem a maiores fugiat cumque officia, dicta atque facilis! Recusandae officia neque qui inventore consequuntur ratione exercitationem in assumenda. Quod impedit nobis tempora, facilis totam numquam rerum vel molestias eum, magni, nulla ab alias inventore assumenda repellendus explicabo maiores iusto voluptatem dolores? Aut veritatis eveniet doloribus, officiis obcaecati perspiciatis quae enim corrupti, soluta libero voluptate voluptatem! Ratione nesciunt repudiandae molestiae quis, architecto, consequatur ex tempora quisquam quasi nisi harum? Qui quis voluptates nihil. Laborum, dolores officiis rem sint nulla totam, beatae voluptatem animi illum harum culpa temporibus, distinctio quidem modi! Amet cupiditate ea incidunt rem perferendis obcaecati, voluptates laborum numquam quod rerum sunt nesciunt eaque nihil? Tempore voluptatum quo harum totam, libero, numquam aliquid dicta obcaecati magni quae ullam officia praesentium vitae mollitia culpa amet dignissimos enim. Aspernatur velit molestiae expedita incidunt nemo, tempore veritatis iste?</p>
        </section>
        ${getCards()}
        <div class="linksSection">
            <section class="cvButton">
                <h4>Download CV</h4>
                <button><a href="./assets/files/lebenslaufKadirKahraman.pdf" download><img class="file" src="./assets/icons/fileDown.svg" alt="CV Button"></a></button>
            </section>
            <a href="https://github.com/ITKadirKahraman" target="_blank"><img class="icon gitHub" src="./assets/icons/gitHub.svg" alt="GitHub"></a>
            <a href="https://de.linkedin.com/in/kadirkahramaninfo" target="_blank"><img class="icon linkedIn" src="./assets/icons/linkedin.svg" alt="Linkedin"></a>
        </div>
    `;
}

function getCards() {
    return `
    <section class="cardSection">
        ${getInsight()}
        ${getCardPersonnel()}
        ${getCardCurrent()}
        ${getMyPath()}
        ${getCardMe()}
        ${getFunFact()}
    </section>
    `;
}

function getInsight() {
    return `
        <section class="card">
            <h3><span>K</span><span>u</span><span>r</span><span>z</span><span>b</span><span>e</span><span>s</span><span>c</span><span>h</span><span>r</span><span>e</span><span>i</span><span>b</span><span>u</span><span>n</span><span>g</span></h3>
            <p class="pSatz">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum magnam consequatur adipisci sequi excepturi culpa optio amet, tempore deleniti rerum.</p>
        </section>
    `;
}

function getCardPersonnel() {
    return `
    <section class="card">
        <table>
            <tr>
                <th>KEYS</th>
                <th>VALUES</th>
            </tr>
            <tr>
                <td>Abschluss</td>
                <td>Wirtschaftsinformatik <br> Bachelor of Science</td>
            </tr>
            <tr>
                <td>Alter</td>
                <td>33</td>
            </tr>
            <tr>
                <td>Wohnort</td>
                <td>Münster, Deutschland</td>
            </tr>
            <tr>
                <td>Führerschein</td>
                <td>Klasse B</td>
            </tr>
            <tr>
                <td>EMail</td>
                <td>kadirkahraman.it@gmail.com</td>
            </tr>
        </table>
    </section>
    `;
}

function getCardCurrent() {
    return `
    <section class="card">
        <h3>Aktuelles Ziel</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptate?</p>
    </section>
    `;
}

function getMyPath() {
    return `
    <section class="card">
        <h3>Journey</h3>
        <p> 
            2016/22 Bachelor of Science
        </p>
        <p>
            2022/24 Softwareentwickler
        </p>
        <p>
            2024/26 Telekommunikation
        </p>
    </section>
    `;
}

function getCardMe() {
    return `
    <section class="card">
        <div class="cardMe">
            <table>
                <tr>
                    <th>Interessen außerhalb des Codens</th>
                </tr>
                <tr>
                    <td>Fitness</td>
                </tr>
                <tr>
                    <td>Spazieren</td>
                </tr>
                <tr>
                    <td>Bücher lesen</td>
                </tr>
                <tr>
                    <td>Schreiben</td>
                </tr>
                <tr>
                    <td>Dokumentationen anschauen</td>
                </tr>
            </table>
        </div>
    </section>
    `;
}

function getFunFact() {
    return `
    <section class="card">
        <h3>Fun Facts</h3>
        <p> 
            Dunkelmodus immer aktiviert
        </p>
        <p>
            Mehr Tabs offen als nötig
        </p>
        <p>
            Debuggen ist 50 % meiner Arbeitszeit
        </p>
    </section>
    `;
}