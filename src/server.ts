import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import {dataSource} from "./data-source";
import router from "./router/router";

class ServerBootstrap {
    public app: express.Application = express();
    private port: number = 3312;

    constructor() {
        dataSource.initialize()
            .then(() => {
                this.app.use(express.json());
                this.app.use(express.urlencoded({ extended: true }));
                this.app.use(morgan('dev'));
                this.app.use(cors());
                this.app.use("/api", router);
                this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
                this.listen();
            })
            .catch((error) => console.log(error))
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("Server listening on port: " + this.port)
        });
    }
}

new ServerBootstrap();