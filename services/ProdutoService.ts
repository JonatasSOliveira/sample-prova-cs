import ProdutoDAO from "../daos/ProdutoDAO";
import { ProdutoView } from "../views/ProdutoView";

export default class ProdutoService {
    private produtoDAO: ProdutoDAO = new ProdutoDAO();

    private validarCadastroProduto(produto: any) {
        if (!produto?.nome || !produto?.preco) {
            throw 'CAMPOS OBRIGATÓRIOS NÃO PREENCHIDOS';
        }
    }

    public async salvar(produto: any): Promise<boolean> {
        try {
            this.validarCadastroProduto(produto);
            return await this.produtoDAO.criar(new ProdutoView(produto).toModel());            
        } catch (error) {
            return false;
        }
    }

    public async listarPorNome(nome?: string): Promise<ProdutoView[]> {
        const produtos = await this.produtoDAO.listarTodosPorFiltro(nome ? {nome} : {});
        return produtos.map((produto) => new ProdutoView(produto.dataValues));
    }
}