"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var tasksCtrl_1 = require("../controllers/tasksCtrl");
router
    .get("/get-tasks", tasksCtrl_1.getTasks)["delete"]("/delete-task", tasksCtrl_1.deleteTask);
exports["default"] = router;
