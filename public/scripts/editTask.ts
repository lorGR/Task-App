function getTaskIdParams(): string {
    const urlParams = new URLSearchParams(window.location.search);
    const taskId = urlParams.get('taskId');
    console.log(`Looking at user with id: ${taskId}`);
    return taskId;
}
function getUserIdParams(): string {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    console.log(`Looking at user with id: ${userId}`);
    return userId;
}

async function handleAddTask(event) {
    try {
        event.preventDefault();
        const taskId = getTaskIdParams();
        const userId = getUserIdParams();
        const newTaskName = event.target.taskName.value;
        console.log(newTaskName);
        //@ts-ignore
        const { data } = await axios.patch('/tasks/edit-task', { newTaskName , taskId});
        if (!data) throw new Error("Couldn't recieve data from axios PATCH URL: *** /tasks/edit-task ***");
        const { tasks, error } = data;
        if(error) throw new Error(error);
        console.log(tasks);
        window.location.href= `./userInfo.html?userId=${userId}`;
    } catch (error) {
        console.error(error);
    }
}

function handleBackUserInfo() {
    const userId = getUserIdParams();
    window.location.href = `./userInfo.html?userId=${userId}`;
}