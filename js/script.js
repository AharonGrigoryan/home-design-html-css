import imageArray from "../data/dataImage.mjs";
const tileLayout = document.querySelector(".tile-layout");
const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".navigation-links-text");

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.classList.add("home-header--sticky");
    navLinks.forEach(function (navLink) {
      navLink.classList.add("home-header--nav");
    });
  } else {
    header.classList.remove("home-header--sticky");
    navLinks.forEach(function (navLink) {
      navLink.classList.remove("home-header--nav");
    });
  }
});

imageArray.map((project, index) => {
  const article = document.createElement("article");
  article.className = `div-${index}`;

  const img = document.createElement("img");
  img.src = project.src;
  img.alt = project.alt;
  img.className = "img";

  const info = document.createElement("div");
  info.className = "info";

  const typeParagraph = document.createElement("p");
  typeParagraph.textContent = `-${project.name}-`;

  const nameHeading = document.createElement("h3");
  nameHeading.textContent = project.alt;

  info.appendChild(typeParagraph);
  info.appendChild(nameHeading);

  article.appendChild(img);
  article.appendChild(info);

  tileLayout.appendChild(article);
});
