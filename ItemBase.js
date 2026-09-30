export class ItemBase {
    #anoPublicacao;

    constructor(titulo, autor, anoPublicacao) {
        if (new.target === ItemBase) {
            throw new error("[ERRO] Não é permitido cadastrar um item genérico. ");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.cadastrarLivro(anoPublicacao);
    }
    get anoPublicacao () {return this.#anoPublicacao;}

    cadastrarLivro(dataPublicacao) {
       
    if (dataPublicacao < 1000 || dataPublicacao > 2026) {
        throw new Error("ERR_ANO_FORA_DO_LIMITE");
    
    }
    if (typeof dataPublicacao !=='number' || isNaN(dataPublicacao)){
        throw new Error("ERR_TIPO_ANO_INVALIDO");
    }
     this.#anoPublicacao = dataPublicacao;
    }
     
    calcularMulta(diasAtraso) {
        throw new error("[ERRO] A classe filha precisa implementar o cálculo de multa! ");
    }
}