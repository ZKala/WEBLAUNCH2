const navbar = document.querySelector(".navbar");

const navbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelector('navbar-link')

window.addEventListener("scroll",() =>{
 if(window.pageYOffset >= navbar.offsetTop) {
  navbar.classList.add("sticky")
 }else{
  navbar.classList.remove("sticky")
 }
});