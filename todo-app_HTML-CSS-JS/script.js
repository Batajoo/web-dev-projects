const barIconButton = document.querySelector(".bar-icon")
const categoriesList = document.querySelector(".categories-list")
const sideBar = document.querySelector(".sidebar");
barIconButton.addEventListener("click", (e)=>{
    categoriesList.classList.toggle("categories-list");
    sideBar.classList.toggle("sidebar-on");
})