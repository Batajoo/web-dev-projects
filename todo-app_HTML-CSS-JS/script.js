const todoInputBox = document.getElementById("todo-text");
const addTaskButton = document.getElementById("add-task");
const todoListContainer = document.getElementById("todo-container");
const categoriesListSelect = document.getElementById("add-category");
const totalTask = document.getElementById("total-task");
let todoListData = [];


//display todolist
const displayTodoList = () => {
    console.log(localStorage.getItem('todoList'));
    todoListContainer.innerHTML = "";
    todoListData = JSON.parse(localStorage.getItem('todoList'));
    numberOfTodos = todoListData.length;
    todoListData.forEach( (todoData, index) => {
        todoListContainer.innerHTML += `
        <div class="task-box" id="task-no-${index + 1}">
            <label for="task-status"><input type="checkbox" id="task-status"><span class="task-data">${todoData.todo}</span></label>
            <div class="action-section">
                <i class="fa-solid fa-pen-to-square task-edit-icons" id="edit-button"></i>
                <i class="fa-solid fa-delete-left task-edit-icons" id="remove-button"></i>
            </div>
        </div>
        `;
    });
    totalTask.textContent = todoListData.length;
};

window.onload = displayTodoList;
// add button functionality 
const addTodoToList = ()=>{
    if (/^\s*$/.test(todoInputBox.value)){
        todoInputBox.classList.add("empty-input-box-alert");
        return;
    
    } else {
        todoInputBox.classList.remove("empty-input-box-alert");
        const todoText = todoInputBox.value;
        const categoryType = categoriesListSelect.value;
        numberOfTodos++;
        todoListData.push({
            category: categoryType,
            todo: todoText,
            completed: false, 
        });
        localStorage.setItem('todoList', JSON.stringify(todoListData));
        displayTodoList();
    }
};

addTaskButton.addEventListener("click", addTodoToList);

todoInputBox.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        addTodoToList();
    }
});


//remove todo
const removeTodo = (e) => {
    const targetElement = e.target.closest('.task-box');
    const targetId = targetElement.id.slice(-1);
    todoListData.splice(targetId-1, 1);
    localStorage.setItem('todoList', JSON.stringify(todoListData));
    displayTodoList();
};


//edit todo
const editTodoBoxChange = (e) => {
    const targetParentElement = e.target.closest('.task-box');
    const targetId = targetParentElement.id.slice(-1);
    console.log(targetId);
    const editTemplate = `<label for="task-status">
                            <span class="task-data">
                                <input type="text" class="edit-input-box" value="${todoListData[targetId - 1].todo}">
                            </span>
                            </label>
                        <div class="action-section">
                            <i class="fa-solid fa-check task-edit-icons" id="edit-complete"></i>
                        </div>`;
    targetParentElement.innerHTML = editTemplate;
    targetParentElement.setAttribute('id', `task-no-${targetId}`)
}

const editTodo = (e) => {
    const targetParentElement = e.target.closest('.task-box');
    const targetInput = targetParentElement.querySelector('.edit-input-box');
    const targetId = targetParentElement.id.slice(-1) - 1;
    const changedTodo = targetInput.value;
    todoListData[targetId].todo = targetInput.value;
    localStorage.setItem('todoList', JSON.stringify(todoListData));
    displayTodoList();
}

//remove and edit event handler
todoListContainer.addEventListener("click", (e)=> {
    if(e.target){
        if(e.target.id === "remove-button"){
            removeTodo(e);
        }
        else if(e.target.id === "edit-button"){
            editTodoBoxChange(e);
        }
        else if(e.target.id === "edit-complete"){
            editTodo(e);
        }
    }
})

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
