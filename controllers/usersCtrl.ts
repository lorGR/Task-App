import express from 'express';

import { userUid } from '../helpers/helper';
import { User } from '../model/userModel';

export let users: Array<User> = [
    {
        name: 'Lior',
        uid: userUid(),
    },
    {
        name: 'Roie',
        uid: userUid(),
    },
    {
        name: 'Mark',
        uid: userUid(),
    }
]

export async function getAllUsers(req: express.Request, res: express.Response) {
    try {
        res.send({ users });
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function getUser(req: express.Request, res: express.Response) {
    try {
        const { userId } = req.body
        if (!userId) throw new Error("Couldn't get 'userId' from body");
        const user = users.find(user => user.uid === userId);
        if (!user) throw new Error(`Couldn't find user with userId: ${userId.string}`);
        res.send({ user });
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function addUser(req: express.Request, res: express.Response) {
    try {
        const { newUserName } = req.body;
        if (!newUserName) throw new Error("Couldn't get newUserName from body");
        const newUser: User = { name: newUserName, uid: userUid()};
        users.push (newUser);
        res.send({ users });
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function deleteUser(req: express.Request, res: express.Response) {
    try {
        const { userId } = req.body;
        if (!userId) throw new Error("Coudln't get userId from body");
        users = users.filter(user => {
            if(user.uid === userId){
                return false;
            } else {
                return true;
            }
        })
        res.send({ users });
    } catch (error) {
        res.send( {error: error.message });
    }
}

