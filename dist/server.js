"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.port || 3000;
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
app.use('/users', userRoutes_1.default);
const tasksRoutes_1 = __importDefault(require("./routes/tasksRoutes"));
app.use('/tasks', tasksRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});
