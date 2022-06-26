import express from 'express';
const router: express.Router = express.Router();

import { getTasks, deleteTask, editTaskName, addTask, completeTask} from '../controllers/tasksCtrl';
router
    .get("/get-tasks", getTasks)
    .delete("/delete-task", deleteTask)
    .patch("/edit-task", editTaskName)
    .post("/add-task", addTask)
    .patch("/completed-task", completeTask);


export default router;