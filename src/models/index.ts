import { UserModel } from "./UserModel";

const userModel = new UserModel();

userModel.createUser('Evandro', 'Professor', 'professor-evandro@gmail.com');

export {
    userModel,
};