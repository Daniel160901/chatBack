import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from "../config/database.js";

export class ConversacionModel extends Model{}

ConversacionModel.init({
    idMensaje: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    emisor: {
        type: DataTypes.INTEGER(1),
        allowNull: false
    },
    receptor: {
        type: DataTypes.INTEGER(1),
        allowNull: true
    },
    mensaje: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    hora: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {
    sequelize: DatabaseConfig,
    tableName: 'conversaciones',
    timestamps: false
});