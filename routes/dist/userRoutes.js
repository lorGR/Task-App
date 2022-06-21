"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCtrl_1 = require("../controllers/usersCtrl");
router
    .get('/get-users', usersCtrl_1.getAllUsers)
    .post('/get-user', usersCtrl_1.getUser);
exports["default"] = router;
