import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from './entity/Product';


// INSIRA AS CONFIGURAÇÕES DO SEU BANCO DE DADOS
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres", 
    password: "root",
    database: "mypharma",
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: [],
})

