import express from 'express';
const router: express.Router = express.Router();

import { getAllUsers, getUser, addUser, deleteUser } from '../controllers/usersCtrl';

router
    .get('/get-users', getAllUsers)
    .post('/get-user', getUser)
    .post('/add-user', addUser)
    .delete('/delete-user', deleteUser)
export default router;