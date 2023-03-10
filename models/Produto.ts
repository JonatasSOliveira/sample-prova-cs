import {Model, DataTypes} from 'sequelize';
import DatabaseConnection from '../database/DatabaseConnection'

export default class Produto extends Model {};

Produto.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize: DatabaseConnection
});
