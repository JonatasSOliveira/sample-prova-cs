import { Router } from "express";
import ProdutoService from "../services/ProdutoService";

export default class ProdutoController {
    private router = Router();
    private produtoService = new ProdutoService();

    public initRoutes(): Router {
        this.iniciarRotaSalvar();
        this.iniciarRotaListarPorNome();
        return this.router;
    }

    private iniciarRotaSalvar() {
        this.router.post('/produto', async (req, res) => {
            try {
                await this.produtoService.salvar(req.body);
                res.status(201).send({criado: true});                
            } catch (error) {
                res.status(500).send({criado: false, erro: 'Erro Inesperado'});
            }
        });
    }

    private iniciarRotaListarPorNome() {
        this.router.get('/produtos', async (req, res) => {
            const produtos = await this.produtoService.listarPorNome();
            res.status(200).send(produtos);
        });
    }

}