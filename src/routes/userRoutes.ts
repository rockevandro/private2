import express, { Request, Response } from "express";
import { userController } from "../controllers";

const routes = express.Router();

routes.get('/users', (req: Request, res: Response) => {
    const users = userController.findAll();

    return res.status(200).json(users);
});

// routes.get('/users/:id', (req: Request, res: Response) => { });
// routes.post('/users/', (req: Request, res: Response) => { });
// routes.put('/users/:id', (req: Request, res: Response) => { });
// routes.post('/users/:id/posts', (req: Request, res: Response) => { });

export default routes;

