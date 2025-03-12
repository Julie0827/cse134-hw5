document.addEventListener("DOMContentLoaded", function() {
    const loadLocal = document.getElementById("load-local");
    const projectsContainer = document.getElementById("projects");
    
    loadLocal.addEventListener("click", function () { 
        projectsContainer.innerHTML = "";
        const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];

        storedProjects.forEach(project => {
            const card = new ProjectCard(project);
            projectsContainer.appendChild(card);
        });
    });
});
