import express, { Request, Response } from "express";
import { userController } from "../controllers";

const routes = express.Router();

routes.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await userController.findAll();

        return res.status(200).json(users);
    } catch (err) {
        console.log(err);
    };
});

routes.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await userController.findById(id);
    
        return res.status(200).json(user);    
    } catch (error) {
        console.log(error);
    }
});

routes.post('/users', async (req: Request, res: Response) => {
    try {
        const { name, surname, email } = req.body;
        const user = await userController.create(name, surname, email);

        return res.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
});

routes.delete('/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await userController.destroy(id);

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
});

// routes.put('/users/:id', (req: Request, res: Response) => { });

export default routes;

