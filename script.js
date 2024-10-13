// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
// `
//       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
//         <path fill-rule="evenodd" d="M10 5a5 5 0 110 10 5 5 0 010-10zM10 0a2 2 0 012 2v2a2 2 0 01-4 0V2a2 2 0 012-2zm7.071 3.071a2 2 0 010 2.828l-1.414 1.414a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l1.414-1.414a2 2 0 012.828 0l1.414 1.414zM10 18a2 2 0 012 2v2a2 2 0 01-4 0v-2a2 2 0 012-2zm-7.071-3.071a2 2 0 010-2.828l1.414-1.414a2 2 0 012.828 0l1.414 1.414a2 2 0 010 2.828l-1.414 1.414a2 2 0 01-2.828 0l-1.414-1.414zM10 8a2 2 0 012-2h2a2 2 0 110 4h-2a2 2 0 01-2-2zm4.243 7.757a2 2 0 010 2.828l-1.414 1.414a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l1.414-1.414a2 2 0 012.828 0l1.414 1.414z" clip-rule="evenodd"/>
//       </svg>`;
// Function to switch icons
const switchIcon = () => {
  if (body.classList.contains('dark')) {
    // Sun icon for light mode
    themeIcon.src =`./Assets/Themeicons/icons8-sun-60.png`;

  } else {
    // Moon icon for dark mode
    themeIcon.src = `./Assets/Themeicons/icons8-dark-theme-60.png`;
      
  }
};

// Toggle the dark mode class
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  switchIcon();
});

// Initialize the correct icon on page load
window.onload = switchIcon;

// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// GSAP Animation for project cards
gsap.from("#about", { 
    duration: 1, 
    opacity: 0, 
    y: 150, 
    stagger: 0.3,
    ease: "back.out(1.7)"
});
gsap.from(".container", { 
  duration: 1, 
  opacity: 0, 
  y: 150, 
  stagger: 0.3,
  ease: "back.out(1.7)"
});


// Toggle Button Logic for Show More and Show Less
const toggleBtn = document.getElementById("toggle-btn");
const toggleBtnr = document.getElementById("toggle-btnr");
const toggleBtnb = document.getElementById("toggle-btnb");
let currentVisibleProjects = 3;
const projectCards = document.querySelectorAll('.project-card');
const projectCardsr = document.querySelectorAll('.project-card1');
const projectCardsb = document.querySelectorAll('.project-card2');

toggleBtn.addEventListener('click', function () {
  if (currentVisibleProjects < projectCards.length) {
    // Show 3 more cards
    for (let i = currentVisibleProjects; i < currentVisibleProjects + 3 && i < projectCards.length; i++) {
      projectCards[i].style.display = 'block';
    }
    currentVisibleProjects += 3;

    // If all cards are shown, change the button text to "Show Less"
    if (currentVisibleProjects >= projectCards.length) {
      toggleBtn.textContent = "Show Less";
    }
    } else {
    // Hide all project cards except the first 3
    for (let i = 3; i < projectCards.length; i++) {
      projectCards[i].style.display = 'none';
    }
    currentVisibleProjects = 3;
    toggleBtn.textContent = "Show More";  // Switch back to "Show More"
  }
});
toggleBtnr.addEventListener('click', function () {
  if (currentVisibleProjects < projectCardsr.length) {
    // Show 3 more cards
    for (let i = currentVisibleProjects; i < currentVisibleProjects + 3 && i < projectCardsr.length; i++) {
      projectCardsr[i].style.display = 'block';
    }
    currentVisibleProjects += 3;

    // If all cards are shown, change the button text to "Show Less"
    if (currentVisibleProjects >= projectCardsr.length) {
      toggleBtnr.textContent = "Show Less";
    }
    } else {
    // Hide all project cards except the first 3
    for (let i = 3; i < projectCardsr.length; i++) {
      projectCardsr[i].style.display = 'none';
    }
    currentVisibleProjects = 3;
    toggleBtnr.textContent = "Show More";  // Switch back to "Show More"
  }
});
toggleBtnb.addEventListener('click', function () {
  if (currentVisibleProjects < projectCardsb.length) {
    // Show 3 more cards
    for (let i = currentVisibleProjects; i < currentVisibleProjects + 3 && i < projectCardsb.length; i++) {
      projectCardsb[i].style.display = 'block';
    }
    currentVisibleProjects += 3;

    // If all cards are shown, change the button text to "Show Less"
    if (currentVisibleProjects >= projectCardsb.length) {
      toggleBtnb.textContent = "Show Less";
    }
    } else {
    // Hide all project cards except the first 3
    for (let i = 3; i < projectCardsb.length; i++) {
      projectCardsb[i].style.display = 'none';
    }
    currentVisibleProjects = 3;
    toggleBtnb.textContent = "Show More";  // Switch back to "Show More"
  }
});