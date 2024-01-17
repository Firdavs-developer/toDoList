// Get element from HTML

let elTodoInput = document.querySelector('.todo-input');
let elTodoBtn = document.querySelector(".todo-btn");
let elTodoList = document.querySelector(".todo-list");

// buttonni boshganda todo listga yangi todo qushadigan funksiya yaratamiz


//DataBase
let todoList = [];

function showTodoList(todoList){
    let newLi = document.createElement("li");
    let newP = document.createElement("p");
    let newCheckBox = document.createElement("input");
    let newStartDiv = document.createElement("div")
    let newEndDiv = document.createElement("div")
    let newDeleteBtn = document.createElement("button");
    let newEditBtn = document.createElement("button");
    
    newLi.classList.add("list-group-item", "d-flex", "justify-content-between");
    newP.classList.add("mb-0");
    newCheckBox.classList.add("form-check-input", "me-2");
    newStartDiv.classList.add("d-flex", "align-items-center");
    newEndDiv.classList.add("d-flex", "align-items-center", "gx-2");
    newEditBtn.classList.add("btn", "btn-warning", "me-2");
    newDeleteBtn.classList.add("btn", "btn-danger");

    newCheckBox.type = "checkbox";
    newEditBtn.textContent = "Edit";
    newDeleteBtn.textContent = "Delete"
    
    for(let todo of todoList){
        newLi.appendChild(newStartDiv);
        newStartDiv.appendChild(newCheckBox)
        newStartDiv.appendChild(newP);

        newLi.appendChild(newEndDiv);
        newEndDiv.appendChild(newDeleteBtn);
        newEndDiv.appendChild(newEditBtn);
        

        newP.textContent = todo.title;
        elTodoList.appendChild(newLi);

    }

}

elTodoBtn.addEventListener("click", function(){
    // inputda kiritilgan qiymatni yangi o'zgaruvchiga o'zlashtirish
    let inputValue = elTodoInput.value.trim();
    console.log(inputValue);

    let newTodo = {
        id: todoList.length + 1,
        title: inputValue,
        isCompleted: false,
    };

    if(elTodoInput.length = 0){
        alert("Siz inputga malumot qo'shmadiz");
        return;
    }
    else{
        todoList.push(newTodo);
    }

    elTodoInput.value = null;

    showTodoList(todoList)

})





