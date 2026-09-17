

export class ItemBase {
    #anoPublicacao;

    constructor(titulo, autor, anoPublicacao) {
        if (new.target === ItemBase) {
            throw new error("[ERRO] Não é permitido cadastrar um item genérico. ");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    get anoPublicacao () {return this.#anoPublicacao;}

    set anoPublicacao(dataPublicacao) {
        this.#anoPublicacao = dataPublicacao;
    if (dataPublicacao < 1000 || dataPublicacao > 2026) {
        throw new error("[BLOQUEIO] O ano de publicação não pode ser menor que 1000! ");
    
    }
    
    }

    calcularMulta(diasAtraso) {
        throw new error("[ERRO] A classe filha precisa implementar o cálculo de multa! ");
    }
}