// --------MOBILE MENU --------------
const mobileMenu = document.createElement("div");
mobileMenu.className = "mobileMenu";
document.body.appendChild(mobileMenu);
const closeIcon = document.createElement("i");
closeIcon.className = "fas fa-times";
mobileMenu.appendChild(closeIcon);
const menuItems = document.createElement("ul");
menuItems.className = "menuItems";
menuItems.innerHTML = `<li><a href="#portfolio">Portfolio</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#contact">Contact</a></li>`;
mobileMenu.appendChild(menuItems);
const blurred = document.querySelectorAll(".filter");
document.getElementById("mobile-menu").addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  blurred.forEach((section) => {
    section.style.filter = "blur(5px)";
  });
});

closeIcon.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  blurred.forEach((section) => {
    section.style.filter = "blur(0px)";
  });
});

const menuLinks = menuItems.querySelectorAll("a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    blurred.forEach((section) => {
      section.style.filter = "blur(0px)";
    });
  });
});

// ------------- Portfolio Section ---------------
const projects = [
  {
    id: 0,
    name: "Tonic",
    companyName: "CANOPY",
    position: "Back End Dev",
    year: 2015,
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["html", "css", "javascript"],
    image: {
      link: "./img/project0.png",
      alt: "Tonic screenshot",
    },
    liveSource: "#",
    sourceCode: "#",
  },
  {
    id: 1,
    name: "Multi-Post Stories",
    companyName: "FACEEBOOK",
    position: "Full Stack Dev",
    year: 2015,
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    technologies: ["html", "Ruby on Rails", "css", "javascript"],
    image: {
      link: "./img/project4.png",
      alt: "Multi-Post Stories screenshot",
    },
    liveSource: "#",
    sourceCode: "#",
  },
  {
    id: 2,
    name: "Facebook 360",
    companyName: "FACEEBOOK",
    position: "Full Stack Dev",
    year: 2015,
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ["html", "css", "javascript"],
    image: {
      link: "./img/project1.png",
      alt: "Facebook 360screenshot",
    },
    liveSource: "#",
    sourceCode: "#",
  },
  {
    id: 3,
    name: "Uber Navigation",
    companyName: "Uber",
    position: "Lead Developer",
    year: 2018,
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    technologies: ["html", "Ruby on Rails", "css", "javascript"],
    image: {
      link: "./img/project2.png",
      alt: "Uber Navigation screenshot",
    },
    liveSource: "#",
    sourceCode: "#",
  },
];
const modalDetails = document.createElement("div");
modalDetails.id = "modal-details";
modalDetails.className = "project-details";

function showDetails(projectIndex) {
  const projectsCode = `
  <div class="details-container">
  <span id="closeDetails"><i class="fas fa-times closeDetails"></i></span>
  <h2 class="project-title">${projects[projectIndex].name}</h2>
  <div class="stats">
      <span class="company">${projects[projectIndex].companyName}</span>
      <span class="role-and-year">${projects[projectIndex].position}</span>
      <span class="role-and-year">${projects[projectIndex].year}</span>
  </div>
  <img src="${projects[projectIndex].image.link}" alt="${
    projects[projectIndex].image.alt
  }" />
  <div class="project-info">
  <p class="description">
    ${projects[projectIndex].description}
  </p>

    <div class="tech-and-buttons">
      <ul class="languages">
      ${(function usedTech() {
        return projects[projectIndex].technologies
          .map((tech) => `<li class="language">${tech}</li>`)
          .join("");
      })()}
      </ul>
      <div class="buttons">
        <a href="${
          projects[projectIndex].liveSource
        }" class="btn">See Live <i class="fas fa-external-link-alt"></i></a>
        <a href="${
          projects[projectIndex].sourceCode
        }" class="btn">See Live <i class="fab fa-github"></i></a>
      </div>

    </div>
  </div>
  </div>`;
  modalDetails.innerHTML += projectsCode;
  document.body.appendChild(modalDetails);
  document.getElementById("closeDetails").addEventListener("click", () => {
    modalDetails.innerHTML = "";
    document.body.removeChild(modalDetails);
    blurred.forEach((section) => {
      section.style.filter = "blur(0)";
    });
  });
}

const portfolio = document.getElementById("portfolio");
const projectList = document.createElement("ul");
projectList.className = "project-list";
portfolio.appendChild(projectList);

const projectsCode = projects.map(
  (project) => `<li class="project">
  <img src="${project.image.link}" alt="${project.image.alt}" />
  <div class="project-info">
    <h2 class="project-title">${project.name}</h2>

    <div class="stats">
      <span class="company">${project.companyName}</span>
      <span class="role-and-year">${project.position}</span>
      <span class="role-and-year">${project.year}</span>
    </div>
    <p class="description">
    ${project.description}
    </p>

    <ul class="languages">
    ${(function usedTech() {
      return project.technologies
        .map((tech) => `<li class="language">${tech}</li>`)
        .join("");
    })()}

    </ul>
    <button class="btn details-btn" type="button" data-id="${
      project.id
    }">See Project</button>
  </div>
</li>`
);
projectList.innerHTML = projectsCode.join("");

const showButton = document.querySelectorAll(".details-btn");
showButton.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    showDetails(event.target.dataset.id);
    blurred.forEach((section) => {
      section.style.filter = "blur(5px)";
    });
  });
});

// ------------ Form Validation ---------------------------
const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email-address");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  
  if (emailInput.value.toLowerCase() !== emailInput.value) {
    e.preventDefault();
    errorMessage.textContent =
      "Please, use only lowercase letter for your email!";
  }
});
