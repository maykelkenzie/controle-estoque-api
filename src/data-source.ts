import "reflect-metadata"; //importante estar no inicio
import "dotenv/config";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = ():DataSourceOptions => {
  const nodeEnv = process.env.NODE_ENV
  const entitiesPath = path.join(__dirname, "./entities/**.{js,ts}")
  const migrationsPath = path.join(__dirname, "./migrations/**.{js,ts}")

  if(nodeEnv === "production"){
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [entitiesPath],
      migrations: [migrationsPath]
    }
  }
  
  return {
    type: "postgres",
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT),
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  }
}

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;