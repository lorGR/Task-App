import express from 'express';

import { taskUid } from '../helpers/helper';
import { Task } from '../model/taskModel';

import { users } from './usersCtrl';

let tasks: Array<Task> = [
    {
        name: 'Wash Couch',
        uid: taskUid(),
        completed: false,
        usersId: `${users[0].uid}`
    },
    {
        name: 'Wash Car',
        uid: taskUid(),
        completed: false,
        usersId: `${users[0].uid}`
    },
    {
        name: 'Clean Roof',
        uid: taskUid(),
        completed: true,
        usersId: `${users[0].uid}`
    },
    {
        name: 'Cook Dinner',
        uid: taskUid(),
        completed: true,
        usersId: `${users[0].uid}`
    },
    {
        name: 'Buy Oqulus Quest 2',
        uid: taskUid(),
        completed: false,
        usersId: `${users[1].uid}`
    },
    {
        name: 'Learn FullStack',
        uid: taskUid(),
        completed: false,
        usersId: `${users[1].uid}`
    },
    {
        name: 'Talk To Adar',
        uid: taskUid(),
        completed: true,
        usersId: `${users[1].uid}`
    },
    {
        name: 'Feed Cat',
        uid: taskUid(),
        completed: false,
        usersId: `${users[2].uid}`
    },
    {
        name: 'Clean House',
        uid: taskUid(),
        completed: false,
        usersId: `${users[2].uid}`
    },
    {
        name: 'Cook Breakfast',
        uid: taskUid(),
        completed: true,
        usersId: `${users[2].uid}`
    },
]

export async function getTasks(req: express.Request, res: express.Response) {
    try {
        const userId = req.query.userId
        if (!userId) throw new Error("Couldn't get 'userId' from query");
        res.send({ tasks: tasks.filter((task) => task.usersId === userId) });
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function deleteTask(req: express.Request, res: express.Response) {
    try {
        const { taskId, userId } = req.body;
        if (!taskId) throw new Error("Couldn't get 'taskId' from body");
        if (!userId) throw new Error("Couldn't get 'userId' from body");
        tasks = tasks.filter(task => {
            if (task.uid === taskId && task.usersId === userId) {
                return false;
            }
            return true;
        });
        res.send({ tasks: tasks.filter(task => task.usersId === userId) });
    } catch (error) {
        res.send({ error: error.message });
    }
}

