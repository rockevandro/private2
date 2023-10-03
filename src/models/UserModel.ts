import { randomUUID } from "crypto";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    id: { type: String, default: randomUUID()},
    name: String,
    surname: String,
    email: String,

});

export const UserModel = mongoose.model("User", UserSchema);