import { ItemBase } from "./ItemBase.js";

export class LivroFisico extends ItemBase {
    constructor (titulo, autor, anoPublicacao, corredor) {
        super (titulo, autor, anoPublicacao);
        this.corredor = corredor;
    }
    calcularMulta(diasAtraso) {
        let valor = diasAtraso * 2.50;
        console.log(" [AVISO] A multa cobrada é sobre um livro físico! ")
        return valor;
    }
}

export class Ebook extends ItemBase {
    constructor (titulo, autor, anoPublicacao, formatoArquivo) {
        super (titulo, autor, anoPublicacao);
        this.formato = formatoArquivo;
    }
    calcularMulta(diasAtraso) {
        console.log("[SISTEMA] Arquivo Bloqueado. Acesso revogado no dispositivo do leitor")
        return 0.00;
    }
}