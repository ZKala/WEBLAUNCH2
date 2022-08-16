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


// dark mode
toggle.addEventListener('click', (e) =>{
 const html = document.querySelector('html')

 if(html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dark mode'
 } else {
  html.classList.add('dark');
  e.target.innerHTML = 'Light mode'
 }

})
// end of darkmode