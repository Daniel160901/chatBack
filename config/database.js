import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const DatabaseConfig = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: process.env.DB_DIALECT,
    timezone: '-05:00',
    port: process.env.DB_PORT,
    logging: false,
    pool: {
        max: 5,
        min: 5,
        acquire: 6000,
        idle: 15000
    }

});

export class Database {
    async connection(){
        try{
            await DatabaseConfig.authenticate();
            return { ok: true, message: 'connection to the database of the chat successful'}
        }
        catch(e) {
            return  {ok: false, message: 'No se pudo establecer conexión con la base de datos' + e }
        }
    }

}

