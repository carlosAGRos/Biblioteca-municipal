export class Leitor {
    #idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.#idade = idade;
    }

    get idade() { return this.#idade; }

    leitorCadastro(idade) {
        if (typeof idade !== 'number' || isNaN(idade)) {
            throw new Error("ERR_TIPO_IDADE_INVALIDO");
        }
        if (idade < 12) {
            throw new Error("ERR_LEITOR_MENOR_IDADE");
        }
        this.#idade = idade;
    }
}