import { randomUUID } from "crypto";
import { IUser } from "../controllers/interfaces/UserInterface";

const databasePassword = 'turma1025Password';

export class UserModel {
    private users: IUser[];

    constructor() {
        this.users = [];
    }

    public getUser(id: string): IUser | undefined {
        if (!this.users.length) {
            throw new Error('Não existem usuários cadastrados.');
        }

        return this.users.find((user: IUser) => user.id === id);
    }

    public createUser(name: string, surname: string, email: string): IUser {
        const user: IUser = {
            id: randomUUID(),
            name,
            surname,
            email,
        };

        this.users.push(user);

        return user;
    }

    public getAllUsers(): IUser[] {
        return this.users;
    }
}