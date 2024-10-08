import {BaseRouter} from "./router";
import {UserQueryController} from "../user/infrastructure/controllers/userQueryController";

export class UserRouter extends BaseRouter<UserQueryController> {
    constructor() {
        super(UserQueryController);
    }

    routes() {
        this.router.get('/user', (req, res) => this.controller.getUsers(req, res));
    }
}