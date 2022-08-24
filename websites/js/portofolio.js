// loading animation
const loading = document.getElementById('loading');

// show spinner countdown
setTimeout(() => {
   loading.remove();
   countdown.style.display = 'flex';
  }, 1000);
  

// end of loading animation


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

// send contact form request
