let header = document.querySelector(".header");
let toggle = document.querySelector(".icons .toggle");
let moon = document.querySelector(".icons .dark");
let xMark = document.querySelector(".close");
let menu = document.querySelector(".nav-menu");
let links = document.querySelectorAll(".nav-menu .links li a");
let upBtn = document.querySelector(".scroll-up");
let sun = document.querySelector(".icons .sun");
toggle.addEventListener("click", () => {
  menu.classList.add("show");
});
xMark.addEventListener("click", () => {
  menu.classList.remove("show");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

window.addEventListener("scroll", () => {
  changeBackground();
  toTopBtn();
  scrollActive();
});

// change header background
function changeBackground() {
  if (window.scrollY > 50) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
}

// show scroll to top  button
function toTopBtn() {
  if (window.scrollY >= 1000) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
}

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

moon.addEventListener("click", () => {
  document.body.classList.add("darktheme");
  moon.style.display = "none";
  sun.style.display = "block";
});

sun.addEventListener("click", () => {
  document.body.classList.remove("darktheme");
  moon.style.display = "block";
  sun.style.display = "none";
});

// Animation with scroll revall
const scr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});
scr.reveal(
  `.home-img, .news-container , a.footer-logo, .footer-description,.footer-content,.footer-information`
),
  scr.reveal(`.home-data`, { origin: "bottom" }),
  scr.reveal(`.about-data , .recently-data`, { origin: "left" }),
  scr.reveal(`.about-container img, .recently-img`, { origin: "right" }),
  scr.reveal(`.card`, { interval: 100 });
