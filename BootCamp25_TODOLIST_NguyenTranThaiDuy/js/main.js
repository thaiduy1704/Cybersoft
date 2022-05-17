import Services from "./services.js";
import ToDoList from "./TodoList.js";
import ListData from "./listArrToDo.js";
import Validation from "./validation.js";

const validation = new Validation();

const services = new Services();
const list = new ListData();
const getElement = (id) => document.getElementById(id);

getElement("two").addEventListener("click", () => {
    list.sort = false
    getListToDo()
})

getElement("three").addEventListener("click", () => {
    list.sort = true
    getListToDo()
})


const renderHTML = (data) => {
    let contentTrue = "";
    let contentFalse = "";
    data.forEach((item, i) => {
        if (item.isDone == false) {
            contentFalse += `
                    <li key=${item.id}>
                        ${item.title}
                        <div class="buttons" key=${item.id}>
                        <button class="remove" onclick="deleteTodo(${item.id})"><i class="far fa-trash-alt"></i></button>
                        
                        
                        <button class = "complete" onclick="updateCheck(${i},true)"><i class="far fa-check-circle"></i></button>
                        </div>
                    </li>
                `;
        }
    });
    data.forEach((item, i) => {
        if (item.isDone == true) {
            contentTrue += `
            
                <li>
                    ${item.title}
                        <div class="buttons">
                        <button class="remove" onclick="deleteTodo(${item.id})"><i class="far fa-trash-alt"></i></button>


                        <button class = "completed"><i class="far fa-check-circle"></i></button>
                        </div>
                    </li>
                
                    `;
        }
    });
    getElement("todo").innerHTML = contentFalse;
    getElement("completed").innerHTML = contentTrue;
};



const getListToDo = () => {
    services
        .fetchData()
        .then((result) => {
            list.arr = result.data
            if (list.sort) {
                renderHTML(list.arr.sort((a, b) => { return b.title.toLowerCase().localeCompare(a.title.toLowerCase()) }));
            } else renderHTML(list.arr.sort((a, b) => { return a.title.toLowerCase().localeCompare(b.title.toLowerCase()) }));
        })
        .catch((error) => {
            console.log(error);
        });
};
getListToDo();

// add TODO
getElement("addItem").addEventListener("click", () => {
    const title = getElement("newTask").value;
    let isValid = true;
    if (validation.checkEmpty(title)) {
        isValid = false
    }
    if (isValid) {

        const todo = new ToDoList("", title, false);
        services
            .addTodo(todo)
            .then(() => {
                getListToDo();
                getElement("newTask").value = ""
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return null


});

// delete TODO
const deleteTodo = (id) => {
    services
        .deleteToDoById(id)
        .then(() => {
            getListToDo();
        })
        .catch((error) => {
            console.log(error);
        });
};

window.deleteTodo = deleteTodo;

// Update Todo

const updateCheck = (i, isCheck) => {
    let temp = list.arr[i]
    temp = { ...temp, isDone: isCheck }

    services.updateTodo(temp)
        .then((result) => {
            const index = list.arr.findIndex(item => item.id === result.data.id)
            if (index !== -1) {
                list.arr[index] = result.data;
            }
            if (list.sort) {
                renderHTML(list.arr.sort((a, b) => { return b.title.toLowerCase().localeCompare(a.title.toLowerCase()) }));
            } else renderHTML(list.arr.sort((a, b) => { return a.title.toLowerCase().localeCompare(b.title.toLowerCase()) }));
        })
        .catch((error) => {
            console.log(error);
        })

}
window.updateCheck = updateCheck;