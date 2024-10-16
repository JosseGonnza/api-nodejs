import {Create, CreateUserRequest} from "../../application/useCases/create";
import {UserRepository} from "../repositories/UserRepository";
import { Request, Response } from "express";


export class UserCommandController {
    private createUser: Create;

    constructor(userRepository: UserRepository) {
        this.createUser = new Create(userRepository);
    }

    async postUser(req: Request, res: Response): Promise<void> {
        const request: CreateUserRequest = req.body;
        const user = this.createUser.execute(request);
        res.status(201).json({ message: "User created", user: user });
    }
}