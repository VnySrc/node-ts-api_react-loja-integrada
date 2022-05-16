import { DataTypes, Model } from "sequelize/types"
import { postgres } from "../database/instances/postgres"

interface ProductInterface extends Model {
    id: number,
    name: string,
    price: number,
    stock: number,
}

export const Product = postgres.define<ProductInterface>("Product", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull:  false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: false,
        createdAt: false,
    }

)