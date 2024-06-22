import { DataSource } from "typeorm";

//load config from env file
require('dotenv').config();

interface ConfigType {
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
}   

const postgresConfig: ConfigType = {
    host: process.env.POSTGRES_HOST as string,
    port: process.env.POSTGRES_PORT as any,
    username: process.env.POSTGRES_USERNAME as string,
    password: process.env.POSTGRES_PASSWORD as string,
    database: process.env.POSTGRES_DATABASE as string,
}

export const AppDataSource = new DataSource({
    ...postgresConfig,
    type: "postgres",
    entities: ["src/entities/*{.ts,.js}"],
    synchronize: false,
    logging: false,
    migrationsTableName: "migration_table",
    migrations: ["src/migrations/*{.ts,.js}"],
})