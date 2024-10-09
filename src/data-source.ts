import "reflect-metadata";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { ConfigServer } from "./config/config";  // Asegúrate que el path a ConfigServer sea correcto

export class AppDataSource extends ConfigServer {
    public dataSource: DataSource;

    constructor() {
        super();  // Llama al constructor de ConfigServer para cargar las variables de entorno

        this.dataSource = new DataSource({
            type: "mysql",
            host: this.getEnvironment("DB_HOST"),  // Usamos los métodos de ConfigServer
            port: this.getNumberEnv("DB_PORT"),
            username: this.getEnvironment("DB_USER"),
            password: this.getEnvironment("DB_PASSWORD"),
            database: this.getEnvironment("DB_DATABASE"),
            entities: [__dirname + "/../**/*.entity{.ts,.js}"],
            migrations: [__dirname + "/../../migrations/*{.ts,.js}"],
            synchronize: true,
            logging: false,
            namingStrategy: new SnakeNamingStrategy(),
        });
    }

    // Método para inicializar la base de datos
    public initializeDatabase(): Promise<DataSource> {
        return this.dataSource.initialize()
            .then(() => {
                console.log("Data Source has been initialized!");
                return this.dataSource;
            })
            .catch((error) => {
                console.error("Error during Data Source initialization:", error);
                throw error;
            });
    }
}

// Exporta una instancia de AppDataSource
const appDataSource = new AppDataSource();
export default appDataSource;
