"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var tasksCtrl_1 = require("../controllers/tasksCtrl");
router
    .get("/get-tasks", tasksCtrl_1.getTasks)["delete"]("/delete-task", tasksCtrl_1.deleteTask)
    .patch("/edit-task", tasksCtrl_1.editTaskName)
    .post("/add-task", tasksCtrl_1.addTask)
    .patch("/completed-task", tasksCtrl_1.completeTask);
exports["default"] = router;
