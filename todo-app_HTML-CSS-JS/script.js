const todoInputBox = document.getElementById("todo-text");
const addTaskButton = document.getElementById("add-task");
const todoListContainer = document.getElementById("todo-container");

const addTodoToList = ()=>{
    const todoText = todoInputBox.value;
    todoListContainer.innerHTML += `
    <div class="task-box">
        <label for="task-status"><input type="checkbox" id="task-status"><span class="task-data">${todoText}</span></label>
        <div class="action-section">
            <i class="fa-solid fa-pen-to-square task-edit-icons"></i>
            <i class="fa-solid fa-delete-left task-edit-icons"></i>
        </div>
    </div>
    `;
};
addTaskButton.addEventListener("click", addTodoToList);


// barIconButton 
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