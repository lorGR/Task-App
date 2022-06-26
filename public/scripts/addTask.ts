function getUserIdParm(): string {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    console.log(`Looking at user with id: ${userId}`);
    return userId;
}

function handleBackUserInfo() {
    const userId = getUserIdParm();
    window.location.href = `./userInfo.html?userId=${userId}`;
}

async function handleAddTask(event) {
    try {
        event.preventDefault();
        const userId = getUserIdParm();
        const taskName = event.target.newTask.value;
        //@ts-ignore
        const { data } = await axios.post('/tasks/add-task', { taskName, userId });
        if (!data) throw new Error("Couldn't receive data from axios POST URL: *** /tasks/add-task ***")
        const { tasks, error } = data;
        if(error) throw new Error(error);
        console.log(tasks);
        window.location.href = `./userInfo.html?userId=${userId}`;
    } catch (error) {
        console.error(error);
    }
} 