import ProdutoService from "../services/ProdutoService";
import ProdutoDAO from "../daos/ProdutoDAO";

const produtoServico = new ProdutoService();
const produtoDAO = new ProdutoDAO();

test("Em caso de Produto Inválido, deve retornar false", async () => {
    const retorno = await produtoServico.salvar({});
    expect(retorno).toEqual(false);
});

test("Em caso de Produto valor 0, deve retornar false", async () => {
    const retorno = await produtoServico.salvar({nome: 'PRODUTO 01', descricao: '', preco: 0, ativo: true});
    expect(retorno).toEqual(false);
});

test("Em caso de Produto correto, deve retornar true", async () => {
    const retorno = await produtoServico.salvar({ nome: 'PRODUTO 01', descricao: '', preco: 10, ativo: true });
    jest.spyOn(produtoDAO, 'criar').mockImplementation(() => new Promise(resolve => resolve(true)));
    expect(retorno).toEqual(true);
});