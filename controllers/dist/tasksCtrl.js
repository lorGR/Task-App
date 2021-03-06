"use strict";
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
exports.__esModule = true;
exports.completeTask = exports.addTask = exports.editTaskName = exports.deleteTask = exports.getTasks = void 0;
var helper_1 = require("../helpers/helper");
var usersCtrl_1 = require("./usersCtrl");
var tasks = [
    {
        name: 'Wash Couch',
        uid: helper_1.taskUid(),
        completed: false,
        usersId: "" + usersCtrl_1.users[0].uid
    },
    {
        name: 'Wash Car',
        uid: helper_1.taskUid(),
        completed: false,
        usersId: "" + usersCtrl_1.users[0].uid
    },
    {
        name: 'Clean Roof',
        uid: helper_1.taskUid(),
        completed: true,
        usersId: "" + usersCtrl_1.users[0].uid
    },
    {
        name: 'Cook Dinner',
        uid: helper_1.taskUid(),
        completed: true,
        usersId: "" + usersCtrl_1.users[0].uid
    },
    {
        name: 'Buy Oqulus Quest 2',
        uid: helper_1.taskUid(),
        completed: false,
        usersId: "" + usersCtrl_1.users[1].uid
    },
    {
        name: 'Learn FullStack',
        uid: helper_1.taskUid(),
        completed: false,
        usersId: "" + usersCtrl_1.users[1].uid
    },
    {
        name: 'Talk To Adar',
        uid: helper_1.taskUid(),
        completed: true,
        usersId: "" + usersCtrl_1.users[1].uid
    },
    {
        name: 'Feed Cat',
        uid: helper_1.taskUid(),
        completed: false,
        usersId: "" + usersCtrl_1.users[2].uid
    },
    {
        name: 'Clean House',
        uid: helper_1.taskUid(),
        completed: false,
        usersId: "" + usersCtrl_1.users[2].uid
    },
    {
        name: 'Cook Breakfast',
        uid: helper_1.taskUid(),
        completed: true,
        usersId: "" + usersCtrl_1.users[2].uid
    },
];
function getTasks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId_1;
        return __generator(this, function (_a) {
            try {
                userId_1 = req.query.userId;
                if (!userId_1)
                    throw new Error("Couldn't get 'userId' from query");
                res.send({ tasks: tasks.filter(function (task) { return task.usersId === userId_1; }) });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getTasks = getTasks;
function deleteTask(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, taskId_1, userId_2;
        return __generator(this, function (_b) {
            try {
                _a = req.body, taskId_1 = _a.taskId, userId_2 = _a.userId;
                if (!taskId_1)
                    throw new Error("Couldn't get 'taskId' from body");
                if (!userId_2)
                    throw new Error("Couldn't get 'userId' from body");
                tasks = tasks.filter(function (task) {
                    if (task.uid === taskId_1 && task.usersId === userId_2) {
                        return false;
                    }
                    return true;
                });
                res.send({ tasks: tasks.filter(function (task) { return task.usersId === userId_2; }) });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.deleteTask = deleteTask;
function editTaskName(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, newTaskName_1, taskId_2;
        return __generator(this, function (_b) {
            try {
                _a = req.body, newTaskName_1 = _a.newTaskName, taskId_2 = _a.taskId;
                if (!newTaskName_1)
                    throw new Error("Couldn't get newTaskName from body");
                if (!taskId_2)
                    throw new Error("Couldn't get taskId from body");
                tasks.filter(function (task) {
                    if (task.uid === taskId_2) {
                        task.name = newTaskName_1;
                        return true;
                    }
                    return false;
                });
                res.send({ tasks: tasks });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.editTaskName = editTaskName;
function addTask(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, taskName, userId, newTask;
        return __generator(this, function (_b) {
            try {
                _a = req.body, taskName = _a.taskName, userId = _a.userId;
                if (!taskName)
                    throw new Error("Couldn't get taskName from body");
                if (!userId)
                    throw new Error("Couldn't get userId from body");
                newTask = { name: taskName, uid: helper_1.taskUid(), completed: false, usersId: userId };
                tasks.push(newTask);
                res.send({ tasks: tasks });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.addTask = addTask;
function completeTask(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, taskId_3, userId_3;
        return __generator(this, function (_b) {
            try {
                _a = req.body, taskId_3 = _a.taskId, userId_3 = _a.userId;
                if (!taskId_3)
                    throw new Error("Couldn't get  userId from body");
                if (!taskId_3)
                    throw new Error("Couldn't get taskId from body");
                tasks.find(function (task) {
                    if (task.uid === taskId_3) {
                        if (task.completed === true) {
                            task.completed = false;
                            return true;
                        }
                        else {
                            task.completed = true;
                            return true;
                        }
                    }
                    return false;
                });
                res.send({ tasks: tasks.filter(function (task) { return task.usersId === userId_3; }) });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.completeTask = completeTask;
