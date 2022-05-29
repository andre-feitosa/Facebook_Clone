import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/pg'

export interface UserInstance extends Model {
    id: number,
    name: string,
    password: string
}

export const Users = sequelize.define<UserInstance>("users", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    }},
    {
        timestamps: false
    }
)