import { userModel } from "../models";

export class UserController {
    public findAll() {
        return userModel.getAllUsers();
    }
}