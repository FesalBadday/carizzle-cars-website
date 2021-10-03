function openNav() {
  const menu = document.getElementById("menu");
  menu.style.width = "100%";
  menu.style.right = "0";
  menu.style.display = "block";
  const menutoggle = document.getElementById("menu-toggle");
  menutoggle.style.display = "none";

  /* const Headhero = document.getElementById("ho-hero");
  Headhero.style.top = "65%";

  const heroSec = document.getElementById("ho-hero-sec");
  heroSec.style.height = "155vh"; */
}

function closeNav() {
  const menu = document.getElementById("menu")
  menu.style.width = "0";
  menu.style.display = "none";
  const menutoggle = document.getElementById("menu-toggle");
  menutoggle.style.display = "flex";

  /* const Headhero = document.getElementById("ho-hero");
  Headhero.style.top = "39%";

  const heroSec = document.getElementById("ho-hero-sec");
  heroSec.style.height = "115vh"; */
}