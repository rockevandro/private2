import express, { Request, Response } from "express";

//Cria uma instancia do express e atribui à variável.
const app = express();
const port = 3000;

//Define uma rota GET
app.get("/", (req: Request, res: Response) =>
{
 res.send("Olá, mundo! Servidor express.js com TypeScript.");
})

//Inicia o servidor ouvindo a porta 3000
app.listen(port, () => {
    console.log(`Servidor Express está ouvindo na porta ${port}, acesse: http://localhost:${port}`)
})
