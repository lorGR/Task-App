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
exports.deleteUser = exports.addUser = exports.getUser = exports.getAllUsers = exports.users = void 0;
var helper_1 = require("../helpers/helper");
exports.users = [
    {
        name: 'Lior',
        uid: helper_1.userUid()
    },
    {
        name: 'Roie',
        uid: helper_1.userUid()
    },
    {
        name: 'Mark',
        uid: helper_1.userUid()
    }
];
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                res.send({ users: exports.users });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getAllUsers = getAllUsers;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId_1, user;
        return __generator(this, function (_a) {
            try {
                userId_1 = req.body.userId;
                if (!userId_1)
                    throw new Error("Couldn't get 'userId' from body");
                user = exports.users.find(function (user) { return user.uid === userId_1; });
                if (!user)
                    throw new Error("Couldn't find user with userId: " + userId_1.string);
                res.send({ user: user });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getUser = getUser;
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newUserName, newUser;
        return __generator(this, function (_a) {
            try {
                newUserName = req.body.newUserName;
                if (!newUserName)
                    throw new Error("Couldn't get newUserName from body");
                newUser = { name: newUserName, uid: helper_1.userUid() };
                exports.users.push(newUser);
                res.send({ users: exports.users });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.addUser = addUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId_2;
        return __generator(this, function (_a) {
            try {
                userId_2 = req.body.userId;
                if (!userId_2)
                    throw new Error("Coudln't get userId from body");
                exports.users = exports.users.filter(function (user) {
                    if (user.uid === userId_2) {
                        return false;
                    }
                    else {
                        return true;
                    }
                });
                res.send({ users: exports.users });
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.deleteUser = deleteUser;
