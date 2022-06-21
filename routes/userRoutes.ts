import express from 'express';
const router: express.Router = express.Router();

import { getAllUsers, getUser } from '../controllers/usersCtrl';

router
    .get('/get-users', getAllUsers)
    .post('/get-user', getUser);
export default router;