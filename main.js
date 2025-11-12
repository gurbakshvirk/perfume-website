const hmbrger = document.getElementById("hamburger");
const nvlist = document.getElementById("nav-list");

hmbrger.addEventListener("click", ()=>{
     nvlist.classList.toggle("nav-list-active");
})