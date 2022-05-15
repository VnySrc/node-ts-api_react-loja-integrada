import { DataTypes, Model } from "sequelize/types"
import { mysql } from "../database/mysql"

interface ProductInterface extends Model {
    id: number,
    name: string,
    price: number,
    stock: number,
}

export const Product = mysql.define<ProductInterface>("Product", {
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