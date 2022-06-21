var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var urlParams = new URLSearchParams(window.location.search);
var userId = urlParams.get('userId');
console.log("Looking at user with id: " + userId);
function handleUserInfo() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            getUser();
            getUserTasks();
            return [2 /*return*/];
        });
    });
}
function getUser() {
    return __awaiter(this, void 0, void 0, function () {
        var data, user, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post('/users/get-user', { userId: userId })];
                case 1:
                    data = (_a.sent()).data;
                    if (!data)
                        throw new Error("Couldn't receive 'data'in axios POST Request URL: *** /users/get-user ***");
                    user = data.user, error = data.error;
                    if (!user)
                        throw new Error("Couldn't deconstract object 'user' from data");
                    if (error)
                        throw new Error(error);
                    greetUser(user);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function greetUser(userName) {
    return __awaiter(this, void 0, void 0, function () {
        var greetUser_1;
        return __generator(this, function (_a) {
            try {
                greetUser_1 = document.getElementById('greetUser').innerHTML = "Welcome " + userName.name;
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function getUserTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var data, tasks, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/tasks/get-tasks?userId=" + userId)];
                case 1:
                    data = (_a.sent()).data;
                    if (!data)
                        throw new Error("Couldn't receive 'Data' from axios GET request URL: ***/tasks/get-tasks*** ");
                    tasks = data.tasks, error = data.error;
                    if (error)
                        throw new Error("Couldn't deconstract object 'tasks' from data ");
                    console.log("%cUser's Tasks:", "background-color: blue;");
                    console.dir(tasks);
                    renderUsersTasks(tasks);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderUsersTasks(userTasks) {
    return __awaiter(this, void 0, void 0, function () {
        var toDoTasksContainer, completedTasksContainer, htmlToDo_1, htmlCompleted_1;
        return __generator(this, function (_a) {
            try {
                toDoTasksContainer = document.getElementById('toDoTasksContainer');
                completedTasksContainer = document.getElementById('completedTasksContainer');
                htmlToDo_1 = "";
                htmlCompleted_1 = "";
                userTasks.forEach(function (task) {
                    if (task.completed) {
                        htmlCompleted_1 += "\n                    <div class=\"user-task\">\n                        <h3>" + task.name + "</h3>\n                        <button onclick=handleEditTask('" + task.uid + "','" + userId + "')>Edit Task Name</button>\n                        <button onclick=handleDeleteTask('" + task.uid + "')>Delete Task</button>\n                    </div>\n                ";
                    }
                    else {
                        htmlToDo_1 += "\n                    <div class=\"user-task\">\n                        <h3>" + task.name + "</h3>\n                        <button onclick=handleEditTask('" + task.uid + "','" + userId + "')>Edit Task Name</button>\n                        <button onclick=handleDeleteTask('" + task.uid + "')>Delete Task</button>\n                    </div>\n                ";
                    }
                });
                toDoTasksContainer.innerHTML = htmlToDo_1;
                completedTasksContainer.innerHTML = htmlCompleted_1;
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function handleDeleteTask(taskId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log("task with id: " + taskId + " was clicked");
                    return [4 /*yield*/, axios["delete"]('/tasks/delete-task', { data: { taskId: taskId, userId: userId } })];
                case 1:
                    data = (_a.sent()).data;
                    if (!data)
                        throw new Error("%c Couldn't receive data from axios PATCH request URL: *** /tasks/delete-task ***");
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleEditTask(taskId, userId) {
    window.location.href = "./editTask.html?userId=" + userId + "?taskId=" + taskId;
}
function handleBackUsers() {
    window.location.href = "./userSelection.html";
}
