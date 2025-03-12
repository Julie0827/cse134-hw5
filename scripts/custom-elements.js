class mainNav extends HTMLElement {
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

        this.appendChild(searchBox);

        const dropdownNavBtn = document.createElement('img');
        dropdownNavBtn.classList.add('dropdown-nav-btn');
        dropdownNavBtn.src = 'assets/images/hamburger.svg';
        dropdownNavBtn.alt = 'Open navigation menu';

        this.appendChild(dropdownNavBtn);
    }
}

customElements.define('main-nav', mainNav);