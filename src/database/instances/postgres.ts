import {Sequelize} from "sequelize"
import dotenv from "dotenv"

dotenv.config()

export const postgres = new Sequelize(
    process.env.POSTGRES_DB as string,
    process.env.POSTGRES_USER as string,
    process.env.POSTGRES_PWD,

    {
        dialect: "postgres",
        port: parseInt(process.env.POSTGRES_PORT as string),
    }
)