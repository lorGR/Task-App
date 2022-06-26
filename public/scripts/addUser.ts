console.log('connected');

async function handleAddUser(event) {
    try {
        event.preventDefault();
        const newUserName = event.target.userName.value;
        console.log(newUserName);
        //@ts-ignore
        const { data } = await axios.post('/users/add-user', { newUserName });
        if (!data) throw new Error("Couldn't recieve data from axios POST URL: *** /users/add-user ***");
        const { users, error } = data;
        if (error) throw new Error(error);
        console.log(users);
        window.location.href = './userSelection.html';
    } catch (error) {
        console.error(error);
    }
}

function handleBackUsersPage() {
    try {
        window.location.href = './userSelection.html';
    } catch (error) {
        console.error(error);
    }
}