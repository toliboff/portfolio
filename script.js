// --------MOBILE MENU --------------
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobileMenu';
document.body.appendChild(mobileMenu);
const closeIcon = document.createElement('i');
closeIcon.className = 'fas fa-times';
mobileMenu.appendChild(closeIcon);
const menuItems = document.createElement('ul');
menuItems.className = 'menuItems';
menuItems.innerHTML = `<li><a href="#portfolio">Portfolio</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#contact">Contact</a></li>`;
mobileMenu.appendChild(menuItems);
const blurred = document.querySelectorAll('.filter');
document.getElementById('mobile-menu').addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  blurred.forEach((section) => {
    section.style.filter = 'blur(5px)';
  });
});

closeIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  blurred.forEach((section) => {
    section.style.filter = 'blur(0px)';
  });
});

const menuLinks = menuItems.querySelectorAll('a');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    blurred.forEach((section) => {
      section.style.filter = 'blur(0px)';
    });
  });
});

// ------------- Portfolio Section ---------------
const projects = [
  {
    id: 0,
    name: 'Space Travellers',
    companyName: 'Microverse',
    position: 'Front End Dev',
    year: 2021,
    description:
      'In this group project, we worked with the real live data from the SpaceX API. We built a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
    technologies: ['reactjs', 'redux', 'css'],
    image: {
      link: './img/project00.png',
      alt: 'Space travellers web app screenshot',
    },
    liveSource: 'https://space-travellers-app.netlify.app/',
    sourceCode: 'https://github.com/toliboff/space-travellers',
  },
  {
    id: 1,
    name: 'Conference',
    companyName: 'Microverse',
    position: 'Front End Dev',
    year: 2021,
    description:
      'This is ready for use Conference website; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      link: './img/pproject0.jpg',
      alt: 'Conference website screenshot',
    },
    liveSource: 'https://toliboff.github.io/Conference/',
    sourceCode: 'https://github.com/toliboff/Conference',
  },
  {
    id: 2,
    name: 'RecipeApp',
    companyName: 'Microverse',
    position: 'Full Stack Dev',
    year: 2021,
    description:
      'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    technologies: ['ruby', 'ruby on rails', 'css', 'heroku'],
    image: {
      link: './img/recipe.png',
      alt: 'RecipeApp',
    },
    liveSource: 'https://infinite-garden-07728.herokuapp.com/',
    sourceCode: 'https://github.com/toliboff/recipeApp',
  },
  {
    id: 3,
    name: 'ExpenseTracker',
    companyName: 'Microverse',
    position: 'Full Stack Dev',
    year: 2021,
    description:
      'This is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    technologies: ['ruby', 'ruby on rails', 'css', 'heroku'],
    image: {
      link: './img/expensetracker.png',
      alt: 'expense tracker  - mobile web app',
    },
    liveSource: 'https://infinite-tor-95974.herokuapp.com/',
    sourceCode: 'https://github.com/toliboff/expence-tracker',
  },
  {
    id: 4,
    name: 'Awesome Books',
    companyName: 'Microverse',
    position: 'Front End Dev',
    year: 2021,
    description:
      'This is a project that displays a list of books and allows you to add and remove books from that list',
    technologies: ['html', 'luxon', 'css', 'javascript'],
    image: {
      link: './img/project1.png',
      alt: 'Awesome Books screenshot',
    },
    liveSource: 'https://toliboff.github.io/awesome-books/',
    sourceCode: 'https://github.com/toliboff/awesome-books',
  },
  {
    id: 5,
    name: 'Todo List',
    companyName: 'Microverse',
    position: 'Front End Dev',
    year: 2021,
    description:
      'This is a project that displays a list of things that one wants to get done or that need to get done.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      link: './img/project2.png',
      alt: 'TodoList',
    },
    liveSource: 'https://toliboff.github.io/todo-list-v1/',
    sourceCode: 'https://github.com/toliboff/todo-list-v1',
  },

];
const modalDetails = document.createElement('div');
modalDetails.id = 'modal-details';
modalDetails.className = 'project-details';

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
      .join('');
  }())}
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
  document.getElementById('closeDetails').addEventListener('click', () => {
    modalDetails.innerHTML = '';
    document.body.removeChild(modalDetails);
    blurred.forEach((section) => {
      section.style.filter = 'blur(0)';
    });
  });
}

const portfolio = document.getElementById('portfolio');
const projectList = document.createElement('ul');
projectList.className = 'project-list';
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
      .join('');
  }())}

    </ul>
    <button class="btn details-btn" type="button" data-id="${
  project.id
}">See Project</button>
  </div>
</li>`,
);
projectList.innerHTML = projectsCode.join('');

const showButton = document.querySelectorAll('.details-btn');
showButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
    blurred.forEach((section) => {
      section.style.filter = 'blur(5px)';
    });
  });
});

// ------------ Form Validation ---------------------------
const userData = JSON.stringify({
  name: '',
  email: '',
  message: '',
});

const form = document.getElementById('contact-form');
const usernameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email-address');
const messageText = document.getElementById('message');
const errorMessage = document.getElementById('error-message');
const resetBtn = document.getElementById('reset');

form.addEventListener('submit', (e) => {
  if (emailInput.value.toLowerCase() !== emailInput.value) {
    e.preventDefault();
    errorMessage.textContent = 'Please, use only lowercase letters for your e-mail!';
  } else {
    localStorage.setItem('userInfo', userData);
  }
});

// -------------- Local Storage ---------------------------

window.addEventListener('load', () => {
  if (localStorage.getItem('userInfo')) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    usernameInput.value = userInfo.name;
    emailInput.value = userInfo.email;
    messageText.value = userInfo.message;
  } else {
    localStorage.setItem('userInfo', userData);
  }
});

function saveData(key, value) {
  if (localStorage.getItem('userInfo')) {
    const oldData = JSON.parse(localStorage.getItem('userInfo'));
    const newData = { ...oldData, [key]: value };
    localStorage.setItem('userInfo', JSON.stringify(newData));
  } else {
    localStorage.setItem('userInfo', userData);
  }
}

form.addEventListener('input', (evt) => {
  if (evt.target.dataset.id === 'name' || evt.target.dataset.id === 'email' || evt.target.dataset.id === 'message') {
    saveData(evt.target.dataset.id, evt.target.value);
  }
});

resetBtn.addEventListener('click', () => {
  localStorage.setItem('userInfo', userData);
});