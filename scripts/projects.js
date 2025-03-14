document.addEventListener('DOMContentLoaded', function() {
    const loadLocal = document.getElementById('load-local');
    const loadRemote = document.getElementById('load-remote');
    const loadingMessage = document.getElementById('loading-message');
    const projectsContainer = document.getElementById('projects');
    const projectNav = document.getElementById('project-nav');

    let isLoading = false;
    
    loadLocal.addEventListener('click', function () {
        if (isLoading) return;

        isLoading = true;

        projectsContainer.innerHTML = '';
        projectNav.innerHTML = '';

        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];

        displayProjects(storedProjects);

        isLoading = false;
    });

    loadRemote.addEventListener('click', async function () {
        if (isLoading) return;

        isLoading = true;

        loadingMessage.classList.remove('hidden');

        projectsContainer.innerHTML = '';
        projectNav.innerHTML = '';

        try {
            const response = await fetch('https://my-json-server.typicode.com/julie0827/projects-data/projects');

            if (!response.ok) {
                throw new Error(`Failed to fetch projects (${response.status}: ${response.statusText})`);
            }

            const projects = await response.json();

            loadingMessage.classList.add('hidden');
            
            displayProjects(projects);
        } catch (error) {
            console.error("Error:", error.message || error);
        }

        isLoading = false;
    });

    function displayProjects(projects) {
        projects.forEach(project => {
            const card = new ProjectCard(project);
            const anchor = document.createElement('a');

            anchor.href = `#${project.id}`;
            anchor.textContent = project.title;

            projectsContainer.appendChild(card);
            projectNav.appendChild(anchor);
        });
    }
});
