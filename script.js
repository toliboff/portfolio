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