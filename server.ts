import express from 'express';
const app: express.Application = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.static('public'));

import userRoutes from './routes/userRoutes';
app.use('/users', userRoutes);

import taskRoutes from './routes/tasksRoutes';
app.use('/tasks', taskRoutes);

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});