function getUserIdParm(): string {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    console.log(`Looking at user with id: ${userId}`);
    return userId;
}


async function handleUserInfo() {
    getUser();
    getUserTasks();
}

async function getUser() {
    try {
        const userId = getUserIdParm();
        //@ts-ignore
        const { data } = await axios.post('/users/get-user', { userId });
        if (!data) throw new Error("Couldn't receive 'data'in axios POST Request URL: *** /users/get-user ***");
        const { user, error } = data;
        if (!user) throw new Error("Couldn't deconstract object 'user' from data");
        if (error) throw new Error(error);
        greetUser(user);
        renderAddButton();
    } catch (error) {
        console.error(error)
    }
}

async function greetUser(userName: User) {
    try {
        const greetUser = document.getElementById('greetUser').innerHTML = `Welcome ${userName.name}`;
    } catch (error) {
        console.error(error);
    }
}

async function getUserTasks() {
    try {
        const userId = getUserIdParm();
        //@ts-ignore
        const { data } = await axios.get(`/tasks/get-tasks?userId=${userId}`);
        if (!data) throw new Error("Couldn't receive 'Data' from axios GET request URL: ***/tasks/get-tasks*** ");
        const { tasks, error } = data;
        if (error) throw new Error("Couldn't deconstract object 'tasks' from data ");
        console.log("%cUser's Tasks:", "background-color: blue;")
        console.dir(tasks);
        renderUsersTasks(tasks);
    } catch (error) {
        console.error(error);
    }
}

async function renderUsersTasks(userTasks: Array<Task>) {
    try {
        const userId = getUserIdParm();
        const toDoTasksContainer = document.getElementById('toDoTasksContainer');
        const completedTasksContainer = document.getElementById('completedTasksContainer');
        let htmlToDo = "";
        let htmlCompleted = "";
        userTasks.forEach(task => {
            if (task.completed) {
                htmlCompleted += `
                    <div class="user-task">
                        <h3>${task.name}</h3>
                        <button onclick=handleEditTask('${task.uid}','${userId}')>Edit Task Name</button>
                        <button onclick="handleCompleteTask('${task.uid}')">Uncomplete Task</button>
                        <button onclick=handleDeleteTask('${task.uid}')>Delete Task</button>
                    </div>
                `;
            } else {
                htmlToDo += `
                    <div class="user-task">
                        <h3>${task.name}</h3>
                        <button onclick=handleEditTask('${task.uid}','${userId}')>Edit Task Name</button>
                        <button onclick="handleCompleteTask('${task.uid}')">Complete Task</button>
                        <button onclick=handleDeleteTask('${task.uid}')>Delete Task</button>
                    </div>
                `
            }
        });
        toDoTasksContainer.innerHTML = htmlToDo;
        completedTasksContainer.innerHTML = htmlCompleted;
    } catch (error) {
        console.error(error)
    }
}

async function handleDeleteTask(taskId: string) {
    try {
        const userId = getUserIdParm();
        console.log(`task with id: ${taskId} was clicked`);
        //@ts-ignore
        const { data } = await axios.delete('/tasks/delete-task', { data: { taskId, userId } });
        if (!data) throw new Error("Couldn't receive data from axios PATCH request URL: *** /tasks/delete-task ***")
        console.log(data);
        const { tasks, error } = data;
        if (error) throw new Error(error);
        renderUsersTasks(tasks);
    } catch (error) {
        console.error(error);
    }
}

async function handleCompleteTask(taskId: string) {
    try {
        const userId = getUserIdParm();
        //@ts-ignore
        const { data } = await axios.patch('/tasks/completed-task', { taskId, userId });
        if (!data) throw new Error("Couldn't get data from axios PATCH URL: *** /tasks/completed-task ***");
        const { tasks, error } = data;
        if (error) throw new Error(error);
        console.log(tasks);
        renderUsersTasks(tasks);
    } catch (error) {
        console.error(error);
    }
}

function handleEditTask(taskId: string, userId: string) {
    window.location.href = `./editTask.html?userId=${userId}&taskId=${taskId}`;
}

function renderAddButton() {
    const userId = getUserIdParm();
    const addTask = document.getElementById('addTask').innerHTML = `
        <button onclick="handleAddTaskPage('${userId}')">Add New Task</button>
    `;
}

function handleAddTaskPage(userId: string) {
    window.location.href = `./addTask.html?userId=${userId}`;
}

function handleBackUsers() {
    window.location.href = "./userSelection.html";
}