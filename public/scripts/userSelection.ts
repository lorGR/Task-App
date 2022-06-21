interface User {
    name: string,
    uid: string,
}

interface Task {
    name: string,
    uid: string,
    completed: boolean
}

async function handleUsers() {
    try {
        //@ts-ignore
        const { data } = await axios.get('/users/get-users');
        if (!data) throw new Error("Couldn't receive 'Data' from axios GET request URL: ***/users/get-users*** ");
        const { users, error } = data;
        if (error) throw new Error(error);
        if (!users) throw new Error(" There is no 'users' to decunstract from data");
        console.log(users);
        renderAllUsers(users);
    } catch (error) {
        console.error(error);
    }
}

function renderAllUsers(users: Array<User>) {
    const usersContainer = document.getElementById('usersContainer');
    let html = "";
    users.forEach(user => {
        html += `
            <div class="userContainer">
                <a href="./userInfo.html?userId=${user.uid}">${user.name}</a>
            </div>
        `
    });
    usersContainer.innerHTML = html;
}

function handleBackHome() {
    window.location.href = '../index.html';
}