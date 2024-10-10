import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import {UserRouter} from "./router/user.router";
import {dataSource} from "./data-source";

class ServerBootstrap {
    public app: express.Application = express();
    private port: number = 8000;

    constructor() {
        dataSource.initialize()
            .then(() => {
                this.app.use(express.json());
                this.app.use(express.urlencoded({ extended: true }));
                this.app.use(morgan('dev'));
                this.app.use(cors());

                this.app.use("/api", this.routers())
                this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
                this.listen();
            })
            .catch((error) => console.log(error))
    }

    routers(): Array<express.Router> {
        return [new UserRouter().router];
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("Server listening on port: " + this.port)
        });
    }
}

new ServerBootstrap();