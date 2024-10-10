import "reflect-metadata";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 8000,
    username: "josse",
    password: "secret",
    database: "node_db",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: [__dirname + "/../../migrations/*{.ts,.js}"],
    synchronize: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
});

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
dataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))