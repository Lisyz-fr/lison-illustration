let header = document.querySelector("#header");
let lastScrollValue = 0;

document.addEventListener('scroll',() => {
		let top  = document.documentElement.scrollTop;
    if(lastScrollValue < top) {
    	header.classList.add("hidden");
    } else {
    	header.classList.remove("hidden");
    }
    lastScrollValue = top;
});

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("responsive");
  const bouton_accueil = document.querySelector(".bouton_accueil");
  bouton_accueil.classList.toggle("responsive_accueil");
}