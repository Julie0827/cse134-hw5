if (!localStorage.getItem("projects")) {
    const Projects = [
        {
            id: "project1",
            title: "Project 1 Title",
            languages: ["HTML", "CSS", "JavaScript"],
            repo: "https://github.com/Julie0827/cse134-hw5",
            imgL: "../assets/images/thumbnail-large.png",
            imgM: "../assets/images/thumbnail-medium.png",
            imgS: "../assets/images/thumbnail-small.png",
            alt: "Exemple Project Thumbnail",
            description: "This is just a placeholder for now. A real description will go here soon, but in the meantime, this text is just filling space. It helps give an idea of how things will look once the actual content is added. Right now, there's nothing important to read here—this is just a temporary stand-in while the final version is being written. Maybe it will explain something in detail, provide useful information, or introduce an exciting project. Whatever it ends up being, it will definitely be more interesting than this! For now, though, this section is just here to help with layout and design. It makes sure everything is spaced properly and looks balanced before the real content is added. If something looks off, now is the time to fix it. Soon enough, this placeholder will be gone, and something meaningful will take its place. But until then, it's just here to remind us that there's more to come. Thanks for your patience!"
        },
        {
            id: "project2",
            title: "Project 2 Title",
            languages: ["C", "Java"],
            repo: "https://github.com/Julie0827/cse134-hw5",
            imgL: "../assets/images/thumbnail-large.png",
            imgM: "../assets/images/thumbnail-medium.png",
            imgS: "../assets/images/thumbnail-small.png",
            alt: "Exemple Project Thumbnail",
            description: "This is just a placeholder for now. A real description will go here soon, but in the meantime, this text is just filling space. It helps give an idea of how things will look once the actual content is added. Right now, there's nothing important to read here—this is just a temporary stand-in while the final version is being written. Maybe it will explain something in detail, provide useful information, or introduce an exciting project. Whatever it ends up being, it will definitely be more interesting than this! For now, though, this section is just here to help with layout and design. It makes sure everything is spaced properly and looks balanced before the real content is added. If something looks off, now is the time to fix it. Soon enough, this placeholder will be gone, and something meaningful will take its place. But until then, it's just here to remind us that there's more to come. Thanks for your patience!"
        },
        {
            id: "project3",
            title: "Project 3 Title",
            languages: ["C++", "C"],
            repo: "https://github.com/Julie0827/cse134-hw5",
            imgL: "../assets/images/thumbnail-large.png",
            imgM: "../assets/images/thumbnail-medium.png",
            imgS: "../assets/images/thumbnail-small.png",
            alt: "Exemple Project Thumbnail",
            description: "This is just a placeholder for now. A real description will go here soon, but in the meantime, this text is just filling space. It helps give an idea of how things will look once the actual content is added. Right now, there's nothing important to read here—this is just a temporary stand-in while the final version is being written. Maybe it will explain something in detail, provide useful information, or introduce an exciting project. Whatever it ends up being, it will definitely be more interesting than this! For now, though, this section is just here to help with layout and design. It makes sure everything is spaced properly and looks balanced before the real content is added. If something looks off, now is the time to fix it. Soon enough, this placeholder will be gone, and something meaningful will take its place. But until then, it's just here to remind us that there's more to come. Thanks for your patience!"
        },
        {
            id: "project4",
            title: "Project 4 Title",
            languages: ["Python", "C"],
            repo: "https://github.com/Julie0827/cse134-hw5",
            imgL: "../assets/images/thumbnail-large.png",
            imgM: "../assets/images/thumbnail-medium.png",
            imgS: "../assets/images/thumbnail-small.png",
            alt: "Exemple Project Thumbnail",
            description: "This is just a placeholder for now. A real description will go here soon, but in the meantime, this text is just filling space. It helps give an idea of how things will look once the actual content is added. Right now, there's nothing important to read here—this is just a temporary stand-in while the final version is being written. Maybe it will explain something in detail, provide useful information, or introduce an exciting project. Whatever it ends up being, it will definitely be more interesting than this! For now, though, this section is just here to help with layout and design. It makes sure everything is spaced properly and looks balanced before the real content is added. If something looks off, now is the time to fix it. Soon enough, this placeholder will be gone, and something meaningful will take its place. But until then, it's just here to remind us that there's more to come. Thanks for your patience!"
        }
    ];

    localStorage.setItem("projects", JSON.stringify(Projects));
}