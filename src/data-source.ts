import "reflect-metadata";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const dataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3312,
    username: "josse",
    password: "secret",
    database: "node_db",
    entities: ["dist/**/*.entity.js"],
    migrations: [__dirname + "/../../migrations/*{.ts,.js}"],
    synchronize: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
});