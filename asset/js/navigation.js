
window.addEventListener("scroll", function (e) {
    scroll_position = window.scrollY;
    
    changeColorNavigation(scroll_position);
  });

  
const aboutLink = document.querySelector(".nav-about-link");
const worksLink = document.querySelector(".nav-works-link");
const contactLink = document.querySelector(".nav-contact-link");
const linkedinLink = document.querySelector(".linkedin");
const githubLink = document.querySelector(".github");

let scroll_position = 0,
  scroll_position_about_top = 615,
  scroll_position_about_bottom = 53,
  scroll_position_works_top = 1248,
  scroll_position_works_bottom = 773,
  scroll_position_contact_top = 3280,
  scroll_position_contact_bottom = 2700;


function changeColorNavigation(scroll) {
  if (scroll < scroll_position_about_top || (scroll >= scroll_position_works_top && scroll < scroll_position_contact_top)) {
    addPrimaryColor(aboutLink, worksLink, contactLink);
  } else if (scroll >= scroll_position_about_top || scroll < scroll_position_works_top || scroll >= scroll_position_contact_top) {
    addSecondaryColor(aboutLink, worksLink, contactLink);
  }

  if (scroll < scroll_position_about_bottom || (scroll > scroll_position_works_bottom && scroll < scroll_position_contact_bottom)) {
    addPrimaryColor(linkedinLink,githubLink);
  } else if (scroll >= scroll_position_about_bottom || scroll >= scroll_position_contact_bottom) {
    addSecondaryColor(linkedinLink,githubLink);
  }
}

function addSecondaryColor(DomElement1, DomElement2, DomElement3) {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].classList.remove("primary");
    arguments[i].classList.add("secondary");
  }
}

function addPrimaryColor(DomElement1, DomElement2, DomElement3) {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].classList.remove("secondary");
    arguments[i].classList.add("primary");
  }
}


