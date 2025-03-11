class ProjectCard extends HTMLElement {
    constructor(project) {
        super();

        if (!this.isProjectDataValid(project)) return;

        this.id = project.id;

        const title = document.createElement("h2");
        title.textContent = project.title;

        const languageList = document.createElement("ul");

        project.languages.forEach(language => {
            const li = document.createElement("li");
            li.textContent = language;
            languageList.appendChild(li);
        });

        const repoLink = document.createElement("a");
        repoLink.classList.add("repo-btn");
        repoLink.target = "_blank";
        repoLink.textContent = "GitHub Repository";
        repoLink.href = project.repo;


        const picture = document.createElement("picture");

        const sourceLarge = document.createElement("source");
        sourceLarge.media = "(min-width: 1000px)";
        sourceLarge.srcset = project.imgL;

        const sourceMedium = document.createElement("source");
        sourceMedium.media = "(min-width: 600px)";
        sourceMedium.srcset = project.imgM;

        const img = document.createElement("img");
        img.src = project.imgS;
        img.alt = project.alt;

        picture.appendChild(sourceLarge);
        picture.appendChild(sourceMedium);
        picture.appendChild(img);

        const description = document.createElement("p");
        description.textContent = project.description;

        const topLink = document.createElement("a");
        topLink.href = "#top";
        topLink.classList.add("top-btn");
        topLink.textContent = "Go to Top";

        this.appendChild(title);
        this.appendChild(languageList);
        this.appendChild(repoLink);
        this.appendChild(picture);
        this.appendChild(description);
        this.appendChild(topLink);
    }

    isProjectDataValid(project) {
        if (!project || typeof project !== "object") {
            console.error(`Invalid project data: ${project}`);
            return false;
        }

        const requiredFields = ["title", "languages", "repo", "imgL", "imgM", "imgS", "alt", "description"];
        
        for (const field of requiredFields) {
            if (!project[field]) {
                console.error(`The ${field} field is missing.`);
                return false;
            }

            if (field === "languages") {
                if (typeof project[field] !== "object" || project[field].length === 0) {
                    console.error(`Invalid data in the ${field} field.`)
                    return false;
                }

            } else {
                if (typeof project[field] !== "string" || project[field].trim().length === 0) {
                    console.error(`Invalid data in the ${field} field.`)
                    return false;
                } 
            }
        }
        
        return true;
    }
}

customElements.define("project-card", ProjectCard);

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