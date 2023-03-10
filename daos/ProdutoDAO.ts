import { WhereOptions } from "sequelize";
import DAOInterface from "../interfaces/DAOInterface";
import Produto from "../models/Produto";

export default class ProdutoDAO implements DAOInterface<Produto> {
    public async criar(produto: Produto): Promise<boolean> {
        try {            
            await Produto.create({...produto.dataValues, ativo: true});
            return true;
        } catch (error) {
            return false;
        }
    }

    public async listarTodosPorFiltro(filtro?: WhereOptions): Promise<Produto[]> {
        return await Produto.findAll({where: filtro});
    }    
}