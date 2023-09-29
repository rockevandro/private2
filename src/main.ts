import * as dotenv from "dotenv";
import express from "express";
import userRoutes from './routes/UserRoutes';

dotenv.config();

const app = express();
const port = 3000;

app.use(userRoutes);

app.listen(port, () => {
    console.log(`Servidor Express está ouvindo na porta ${port}, acesse: http://localhost:${port}`)
})
