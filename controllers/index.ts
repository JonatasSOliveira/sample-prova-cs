import { Router } from "express";
import ProdutoController from "./ProdutoController";

export default class Controllers {
    private produtoController = new ProdutoController();

    public initRoutes(): Router {
        const router = Router();
        router.use('/api', this.produtoController.initRoutes());
        return router;
    }
}