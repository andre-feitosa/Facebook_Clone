import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/pg'

export interface UserInstance extends Model {
    name: string,
    message: string,
    image: string,
    date: string
}

export const Posts = sequelize.define<UserInstance>("posts", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    message: {
        allowNull: false,
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    date: {
        allowNull: false,
        type: DataTypes.STRING
    }},
    {
        timestamps: false
    }
)