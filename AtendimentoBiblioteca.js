import { Leitor } from './Leitor.js';

export class AtendimentoBiblioteca {

    cadastrarNovoLeitor(nome, idade) {
        try {
            console.log(`\n[GUICHÊ BIBLIOTECA] Iniciando comunicação com o servidor...`);

            const leitor = new Leitor(nome, idade);
            leitor.leitorCadastro(idade);
            console.log(` Sucesso! A carteirinha de ${leitor.nome} foi gerada.`);

        } catch (excecaoCapturada) {
            console.log(`[ERRO INTERCEPTADO] A carteirinha não pôde ser gerada.`);
            this.traduzirCodigoDeErro(excecaoCapturada.message);

        } finally {
            console.log("Operação de cadastro finalizada. Guichê liberado para o próximo usuário da fila.");
        }
    }

    cadastrarLivro(livro, dataPublicacao) {
        try {
            console.log(`\n[GUICHÊ BIBLIOTECA] Iniciando comunicação com o servidor...`);

            livro.cadastrarLivro(dataPublicacao);
            console.log(` Sucesso! O ano de publicação é válido.`);

        } catch (excecaoCapturada) {
            console.log(`[ERRO INTERCEPTADO] O ano de publicação é inválido.`);
            this.traduzirCodigoDeErro(excecaoCapturada.message);

        } finally {
            console.log("Operação de cadastro finalizada. Guichê liberado para o próximo usuário da fila.");
        }
    }

    traduzirCodigoDeErro(codigoDoErro) {
        switch (codigoDoErro) {
            case "ERR_TIPO_ANO_INVALIDO":
                console.log("Atenção: Os campos de ano de publicação e idade do leitor aceitam apenas caracteres numéricos.");
                break;

            case "ERR_ANO_FORA_DO_LIMITE":
                console.log("Aviso do sistema: O ano de publicação do catálogo deve estar situado entre 1000 e 2026.");
                break;

            case "ERR_LEITOR_MENOR_IDADE":
                console.log("Aviso do Sistema: Leitores menores de 12 anos necessitam da presença física de um responsável para a efetivação do cadastro");
                break;

            case "ERR_TIPO_IDADE_INVALIDO":
                console.log("Atenção: Os campos de ano de publicação e idade do leitor aceitam apenas caracteres numéricos.");
                break;

            default:
                console.log(`Serviço Indisponível`);
                break;
        }
    }
}