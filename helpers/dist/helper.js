"use strict";
exports.__esModule = true;
exports.taskUid = exports.userUid = void 0;
function userUid() {
    return Math.random().toString(16).slice(2);
}
exports.userUid = userUid;
function taskUid() {
    return Math.random().toString(16).slice(2) + "_TS";
}
exports.taskUid = taskUid;
