import {UserCommandController} from "../user/infrastructure/controllers/userCommandController";
import {Router} from "express";
import {UserRepository} from "../user/infrastructure/repositories/UserRepository";
import {dataSource} from "../data-source";

const router = Router();
const userRepository = new UserRepository(dataSource);
const userCommandController = new UserCommandController(userRepository);

router.post('/', (req, res) => userCommandController.postUser(req, res));
// Componente para swagger
/**
 * @swagger
 * /api/users/:
 *      post:
 *          summary: Guardar un usuario
 *          tags:
 *              - User
 *          requestBody:
 *              description: Esquema para guardar un usuario
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserSchema'
 *          responses:
 *              201:
 *                  description: Usuario creado.
 *              500:
 *                  description: Error interno del servidor.
 * */


// this.router.get('/user', (req, res) => this.controller.getUsers(req, res));
// /**
//  * @swagger
//  * /api/user/:
//  *      get:
//  *          summary: Obtener un listado de usuarios.
//  *          tags:
//  *              - User
//  *          responses:
//  *              200:
//  *                  description: Usuarios obtenidos con éxito.
//  * */

export default router;