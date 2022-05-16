import dotenv from "dotenv"
dotenv.config()

export default {
  "development": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PWD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
  },
  "test": {
    "username": process.env.POSTGRES_USER_TEST,
    "password": process.env.POSTGRES_POSTGRES_PWD_TEST,
    "database": process.env.POSTGRES_DB_TEST,
    "host": process.env.POSTGRES_HOST_TEST,
    "dialect": "postgres",
  },
  "production": {
    "username": process.env.USER,
    "password": process.env.POSTGRES_PWD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
  }
}
