import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) =>
{
 res.send("Olá, mundo! Servidor express.js com TypeScript.");
});

(async function () {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/db');
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
        console.log("Connected to mongodb");
    } catch (error) {
        console.log(error);
    }

    app.listen(port, async () => {
        console.log(`Servidor Express está ouvindo na porta ${port}, acesse: http://localhost:${port}`)
    });
})();
