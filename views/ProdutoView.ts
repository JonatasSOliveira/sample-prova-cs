import Produto from "../models/Produto";

interface ProdutoAtributos {
    id?: number;
    nome?: string;
    descricao?: string;
    preco?: number;
}

export class ProdutoView  {
    private id?: number;
    private nome?: string;
    private descricao?: string;
    private preco?: number;

    constructor(atributos: ProdutoAtributos) {
        this.id = atributos.id;
        this.nome = atributos.nome;
        this.descricao = atributos.descricao;
        this.preco = atributos.preco;
    }

    public toModel(): Produto {
        return new Produto({
            id: this.id,
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco,
        });
    }
}