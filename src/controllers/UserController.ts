import { userRepository } from "../models";
import { IUser } from "./interfaces/UserInterface";

export class UserController {
    public findAll(): Promise<IUser[]> {
        return userRepository.findAll();
    }

    public findById(id: string): Promise<IUser> {
        return userRepository.findById(id);
    }

    public create(name: string, surname: string, email: string): Promise<IUser> {
        return userRepository.create(name, surname, email);
    }

    public async destroy(id: string): Promise<boolean> {
        const userDeleted = await userRepository.destroy(id);

        return userDeleted.acknowledged;
    }
}