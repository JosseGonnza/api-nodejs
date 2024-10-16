import { Request, Response } from "express";

export class UserQueryController {
    getUsers(req: Request, res: Response) {
        res.status(200).json();
    }
}