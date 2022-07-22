import { Product } from './entity/Product';
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "666ricoestamos",
    database: "MyPharma",
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: [],
})

