import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import {UserRouter} from "./router/user.router";
import {ConfigServer} from "./config/config";
import appDataSource from "./data-source";

class ServerBootstrap extends ConfigServer{
    public app: express.Application = express();
    private port: number = this.getNumberEnv("PORT");

    constructor() {
        super();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // Inicializa la conexión a la base de datos antes de arrancar el servidor
        // Maneja explícitamente la promesa
        this.initializeDatabaseAndServer()
            .then(() => {
                console.log("Server and database initialized successfully.");
            })
            .catch((error) => {
                console.error("Error during server and database initialization:", error);
            });

        this.app.use(morgan('dev'));
        this.app.use(cors());

        this.app.use("/api", this.routers())
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        this.listen();
    }

    routers(): Array<express.Router> {
        return [new UserRouter().router];
    }

    // Método que inicializa la base de datos y luego levanta el servidor
    private async initializeDatabaseAndServer() {
        try {
            await appDataSource.initializeDatabase();  // Inicializa la base de datos
            this.listen();  // Luego de la conexión exitosa, inicia el servidor
        } catch (error) {
            console.error("Error initializing database or starting server:", error);
        }
    }

    // async dbConnection() {
    //     try {
    //         const mysql = require('mysql');
    //         const db = await mysql.createConnection(AppDataSource);
    //         console.log('Conexión a MySQL establecida.');
    //         return db;
    //     }
    //     catch (error) {
    //         console.error('Error al conectar a MySQL:', error);
    //         throw error;
    //     }
    // }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("Server listening on port: " + this.port)
        });
    }
}

new ServerBootstrap();