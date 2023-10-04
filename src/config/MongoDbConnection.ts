import mongoose from "mongoose";

export class MongoDBConnection {
    public connect(): Promise<any> {
        const mongo_url = process.env.MONGODB_URL;
        const mongo_db = process.env.MONGO_DB;

        return mongoose.connect(`${mongo_url}/${mongo_db}`).then(() => {
            console.log('Connected to MongoDB');
        }).catch(err => {
            console.log(err);
        });
    }
}