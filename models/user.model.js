import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from "../config/database.js";

export class UserModel extends Model{}

    UserModel.init({
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            comment: "null",
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        fullname: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        foto: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        status: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        }

    }, {
        sequelize: DatabaseConfig,
        tableName: 'usuarios',
        timestamps: false
    });
