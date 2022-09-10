let header = document.querySelector("#header");
let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("active", scrollY > 0);
});

menu.addEventListener("click", function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle("active");
});

window.addEventListener("scroll", ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove("active");
});