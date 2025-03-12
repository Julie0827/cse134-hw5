class MainNav extends HTMLElement {
    constructor() {
        super();
        
        const logo = document.createElement('a');
        logo.classList.add('logo');
        logo.href = 'index.html';

        const img = document.createElement('img');
        img.src  = 'assets/images/logo.png';
        img.alt = 'Logo';

        logo.appendChild(img);
        this.appendChild(logo);

        const pages = ['Home', 'About Me', 'Projects', 'Resume', 'Contact'];

        pages.forEach( page => {
            const navLink = document.createElement('a');
            let fileName = page.split(' ')[0].toLowerCase();

            if (fileName === 'home') {
                fileName = 'index';
            }

            navLink.classList.add('nav-link');
            navLink.href = `${fileName}.html`;
            navLink.textContent = page;

            if (fileName === this.getAttribute('data-current')) {
                navLink.classList.add('active');
            }

            this.appendChild(navLink);
        });

        const searchBox = document.createElement('input');
        searchBox.type = 'text';
        searchBox.classList.add('search-box');
        searchBox.placeholder = 'Search...';

        const dropdownNavBtn = document.createElement('img');
        dropdownNavBtn.classList.add('dropdown-nav-btn');
        dropdownNavBtn.src = 'assets/images/hamburger.svg';
        dropdownNavBtn.alt = 'Open navigation menu';

        this.append(searchBox, dropdownNavBtn);
    }
}

customElements.define('main-nav', MainNav);

class SettingsPanel extends HTMLElement {
    constructor() {
        super();

        const audio = document.createElement('audio');
        audio.loop = true;
        audio.autoplay = false;

        const source = document.createElement('source');
        source.src = 'assets/audio/background_audio.mp3';
        source.type = 'audio/mpeg';

        audio.appendChild(source);

        const playPauseBtn = document.createElement('button');
        playPauseBtn.classList.add('play-pause-btn');
        playPauseBtn.title = 'Play Music';
        
        const bgImg = document.createElement('img');
        bgImg.classList.add('music-background');
        bgImg.src = 'assets/images/music-background.svg';
        bgImg.alt = 'Stars forming a circular pattern';

        const playImg = document.createElement('img');
        playImg.classList.add('play-pause-icon');
        playImg.src = 'assets/images/play.svg';
        playImg.alt = 'Play Icon';

        playPauseBtn.append(bgImg, playImg);

        const toggle = document.createElement('div');
        toggle.classList.add('toggle-container');
        toggle.title = 'Switch to Dark Mode';

        const inner = document.createElement('div');
        inner.classList.add('inner-container');

        for (let i = 0; i < 3; i++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');

            if (i === 2) {
                circle.classList.add('sun-moon');
            }

            inner.appendChild(circle);
        }

        toggle.appendChild(inner);
        
        this.append(audio, playPauseBtn, toggle);
    }
}

customElements.define('settings-panel', SettingsPanel);
