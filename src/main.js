import './style.css';



const inputTask = document.querySelector("#input-task");
const btnAddTask = document.querySelector("#btn-add-task");

const taskData = [];

const removeSpecialChars = (taskValue) => {
    return taskValue.replace(/[^A-Za-z0-9\-\s]/g, '');
};

btnAddTask.addEventListener( "click", (e) => {
    e.preventDefault();

    if(!inputTask.value.trim()) {
        provideTitle();
        return
    };

    let task = removeSpecialChars(inputTask.value);
    taskData.push({task, completed: false });

    updateTaskContainer();
});

const updateTaskContainer = () => {
    const tasksContainer = document.querySelector("#tasks-container");
    tasksContainer.innerHTML = "";
    inputTask.value = "";

    taskData.forEach(task => {

        // criando a div
        const taskDiv = document.createElement("div");
        taskDiv.id = "task-div";
        taskDiv.classList.add("flex","gap-5", "m-3", "min-w-[400px]", "h-20", "p-4", "bg-white", "rounded-2xl", "whitespace-normal", "text-xl");
        
        // criando o botão de complete task
        const btnCompTask = document.createElement("button");
        btnCompTask.id = "btn-complete-task";
        btnCompTask.classList.add("cursor-pointer", "text-xl", "hover:text-gray-500","active:text-amber-400");
        btnCompTask.innerHTML = `<i class="fa-regular fa-square"></i>`;


        btnCompTask.addEventListener( "click", () => {
            task.completed = !task.completed;
            btnCompTask.innerHTML = task.completed
            ? `<i class="fa-regular fa-square"></i>`
            : `<i class="fa-solid fa-square-check"></i>`;
        });

        //criando botão de remover a task
        const btnDiscard = document.createElement("button");
        btnDiscard.id = "btn-discard";
        btnDiscard.classList.add("cursor-pointer","ml-auto", "text-xl","hover:text-gray-500","active:text-amber-400");
        btnDiscard.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

        //remove a task
        btnDiscard.addEventListener( "click", () => {
            taskData.splice(taskData[task],1);
            updateTaskContainer();
        });

        //criando o p da task
        const taskP = document.createElement("p");
        taskP.textContent = task.task;

        taskDiv.appendChild(btnCompTask);
        taskDiv.appendChild(taskP);
        taskDiv.appendChild(btnDiscard);
        tasksContainer.appendChild(taskDiv);
    }); 
    
};


const provideTitle = () => {
    //dialog
};