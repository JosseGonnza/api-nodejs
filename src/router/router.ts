// import {Router} from "express";
//
// export class BaseRouter<T> {
//     public router: Router;
//     public controller: T;
//     // public middleware: U;
//
//     constructor(TController: { new (): T}) {
//         this.router = Router();
//         this.controller = new TController();
//         this.routes();
//     }
//
//     routes() {}
// }

//TODO: Mirar a ver si esto tiene arreglo y se puede implementar
//por el momento lo nuevo esta debajo

import express from "express";
import userRoutes from "./userRoutes";

const router = express.Router();

// Rutas que exportamos a app.ts
router.use('/users', userRoutes);

// Creando componentes para swagger
// Seguridad
/**
 * @swagger
 * components:
 *      securitySchemes:
 *          apiAuth:
 *              type: apiKey
 *              in: header
 *              name: authorization
 * */

// Esquema de componente usuarios
/**
 * @swagger
 * components:
 *      schemas:
 *          UserSchema:
 *              type: object
 *              properties:
 *                  nickName:
 *                      type: string
 *                      description: Nombre de usuario.
 *                  name:
 *                      type: string
 *                      description: Nombre de la persona.
 *                  lastname:
 *                      type: string
 *                      description: Apellido de la persona.
 *                  address:
 *                      type: string
 *                      description: Dirección de usuario.
 *                  email:
 *                      type: string
 *                      format: email
 *                      description: Correo electrónico del usuario
 *                  password:
 *                      type: string
 *                      pattern: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$
 *                      description: Contraseña del usuario.
 *                  phone:
 *                      type: string
 *                      description: Número de teléfono del usuario.
 *              required:
 *                      - nickName
 *                      - email
 *                      - password
 *                      - phone
 * */

export default router;