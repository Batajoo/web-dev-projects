const barIconButton = document.querySelector(".bar-icon")
const categoriesList = document.querySelector(".categories-list")
const sideBar = document.querySelector(".sidebar");
let sideBarActive = false;

const sideBarAnimation = () => {
    categoriesList.classList.toggle("categories-list-unactive");
    categoriesList.classList.toggle("categories-list");

    sideBar.classList.toggle("sidebar-on");
    barIconButton.classList.toggle("bar-icon-unactive");
}
barIconButton.addEventListener("click", (e)=>{
    if(!sideBarActive){
        sideBarAnimation();
        sideBarActive = true;
    }
})

document.addEventListener("click",(e)=>{
    if(sideBarActive && e.target !== barIconButton && !sideBar.contains(e.target)) {
        sideBarAnimation();
        sideBarActive = false;
    }
})