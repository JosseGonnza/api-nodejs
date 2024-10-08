import * as dotenv from "dotenv";

export abstract class ConfigServer {
    protected constructor() {
        const nodeNameEnv = this.createPathEnv(this.nodeEnv);
        dotenv.config({
            path: nodeNameEnv,
        });
    }

    // Lee la variable de entorno
    public getEnvironment(k: string): string | undefined {
        return process.env[k]; // process.env[PORT] -> Así se leería
    }

    // Define que la variable es un número
    public getNumberEnv(k: string): number {
        return Number(this.getEnvironment(k));
    }

    // Obligamos a devolver un string, aunque el valor entre undefined
    public get nodeEnv(): string {
        return this.getEnvironment("NODE_ENV")?.trim() || "";
    }

    public createPathEnv(path: string): string {
        const arrEnv: Array<string> = ["env"] // string[] Es lo mismo!!
        if (path.length > 0) {
            const stringToArray = path.split(".");
            arrEnv.unshift(...stringToArray)
        }
        return "." + arrEnv.join("."); // ['hola', 'mundo'] => 'hola.mundo'
    }
}