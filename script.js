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

const projectSection = document.getElementById("portfolio");
const cardUL = document.createElement("ul");
cardUL.className = "cards-project-list";
projectSection.appendChild(cardUL);

for (i = 0; i < myProjects.length; i++) {
  let cardList = document.createElement("li");
  cardList.className = "card";
  cardUL.appendChild(cardList);

  let cardImage = document.createElement("img");
  cardImage.className = "card-image1";

  let cardContent = document.createElement("div");
  cardContent.className = "card-content";
  cardList.appendChild(cardImage, cardContent);

  let cardTitle = document.createElement("h2");
  cardTitle.classList = "card-title";

  let cardDescription = document.createElement("p");
  cardDescription.className = "card-description";
  cardDescription.textContent = `${myProjects[i].descriptionName}`;

  let cardSpan = document.createElement("span");
  cardSpan.textContent = `${myProjects[i].descriptionPosition}`;
  cardDescription.appendChild(cardSpan);
}

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
  },
];

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
      <span class="company">${project.company}</span>
      <span class="role-and-year">${project.position}</span>
      <span class="role-and-year">${project.year}</span>
    </div>

    <p class="description">
    ${project.description}
    </p>

    <ul class="languages">
    ${(function usedTech() {
      return project.technologies.map(
        (tech) => `<li class="language">${tech}</li>`
      );
    })()}

    </ul>

    <button class="btn details-btn" type="button" data-id="${
      project.id
    }">See Project</button>
  </div>
</li>`
);
projectList.innerHTML = projectsCode;
