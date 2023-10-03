import * as dotenv from "dotenv";
import express from "express";
import userRoutes from './routes/UserRoutes';
import { MongoDBConnection } from "./config/MongoDbConnection";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(userRoutes);

(async function () {
    const mongooseConnection = new MongoDBConnection();

    await mongooseConnection.connect();

    app.listen(port, () => {
        console.log(`Servidor Express está ouvindo na porta ${port}, acesse: http://localhost:${port}`);
    });
})();

