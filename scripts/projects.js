document.addEventListener('DOMContentLoaded', function() {
    const loadLocal = document.getElementById('load-local');
    const projectsContainer = document.getElementById('projects');
    const projectNav = document.getElementById('project-nav');
    
    loadLocal.addEventListener('click', function () { 
        projectsContainer.innerHTML = '';
        projectNav.innerHTML = '';

        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];

        storedProjects.forEach(project => {
            const card = new ProjectCard(project);
            const anchor = document.createElement('a');

            anchor.href = `#${project.id}`;
            anchor.textContent = project.title;

            projectsContainer.appendChild(card);
            projectNav.appendChild(anchor);
        });
    });
});
