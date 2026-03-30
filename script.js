// Array holding all your real project details
const myProjects = [
    {
        title: "My Portfolio",
        url: "https://lexonlib.com/jawadportfolio",
        icon: "fas fa-user-tie",
        description: "My personal web developer portfolio showcasing my skills and experience."
    },
    {
        title: "LexonLib",
        url: "https://lexonlib.com",
        icon: "fas fa-book-open",
        description: "A comprehensive notes-sharing platform designed for students and learners."
    },
    {
        title: "MHDiV",
        url: "https://mhdiv.xo.je",
        icon: "fas fa-laptop-code",
        description: "Mercy & Hikmah Digital Ventures. A digital solutions project."
    },
    {
        title: "EEGMA Jacobabad",
        url: "https://eegma.lexonlib.com",
        icon: "fas fa-city",
        description: "A Fully Working Academic Website for a real Academy"
    },
    {
        title: "Intizar Blog",
        url: "https://blog.lexonlib.com", 
        icon: "fas fa-blog",
        description: "A customized blogging platform featuring a secure admin panel."
    },
    {
        title: "Madarsa Jawwadia",
        url: "https://jawwadia.lexonlib.com", // Update this URL when the site is live!
        icon: "fas fa-school",
        description: "A full university-style website for Madarsa Jawwadia Lakhi Ghulam shah."
    }
];

const projectsGrid = document.getElementById('projectsGrid');

// Function to generate the HTML for each project and inject it into the page
function loadProjects() {
    myProjects.forEach(project => {
        // Create the card div
        const card = document.createElement('div');
        card.className = 'project-card';

        // Set the inner HTML of the card
        card.innerHTML = `
            <i class="${project.icon} project-icon"></i>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank" class="visit-btn">Visit Site <i class="fas fa-external-link-alt"></i></a>
        `;

        // Add the card to the grid
        projectsGrid.appendChild(card);
    });
}

// Run the function when the page loads
loadProjects();