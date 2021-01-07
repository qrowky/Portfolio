
window.addEventListener("scroll", function (e) {
    scroll_position = window.scrollY;
    changeColorNavigation(scroll_position);
  });

  
const aboutLink = document.querySelector(".nav-about-link");
const worksLink = document.querySelector(".nav-works-link");
const contactLink = document.querySelector(".nav-contact-link");

let scroll_position = 0,
  scroll_position_about = 615,
  scroll_position_works = 1248,
  scroll_position_contact = 3280;


function changeColorNavigation(scroll) {
  if (scroll < scroll_position_about || (scroll >= scroll_position_works && scroll < scroll_position_contact)) {
    addPrimaryColor(aboutLink, worksLink, contactLink);
  } else if (scroll >= scroll_position_about || scroll < scroll_position_works || scroll >= scroll_position_contact) {
    addSecondaryColor(aboutLink, worksLink, contactLink);
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


