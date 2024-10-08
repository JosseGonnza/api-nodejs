import {BaseRouter} from "./router";
import {UserQueryController} from "../user/infrastructure/controllers/userQueryController";

export class UserRouter extends BaseRouter<UserQueryController> {
    constructor() {
        super(UserQueryController);
    }

    routes() {
        this.router.get('/user', (req, res) => this.controller.getUsers(req, res));
        /**
         * @swagger
         * /api/user/:
         *      get:
         *          summary: Obtener un listado de usuarios.
         *          tags:
         *              - User
         *          responses:
         *              200:
         *                  description: Usuarios obtenidos con éxito.
         * */
    }
}