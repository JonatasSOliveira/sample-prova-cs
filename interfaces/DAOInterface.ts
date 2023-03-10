import { Model, WhereOptions } from "sequelize";
import Produto from "../models/Produto";

export default interface DAOInterface<M extends Produto> {
    criar(model: M): Promise<boolean>;
    listarTodosPorFiltro(filtro?: WhereOptions): Promise<M[]>;
}