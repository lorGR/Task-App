import express from 'express';
const router: express.Router = express.Router();

import { getTasks, deleteTask } from '../controllers/tasksCtrl';
router
    .get("/get-tasks", getTasks)
    .delete("/delete-task", deleteTask)


export default router;