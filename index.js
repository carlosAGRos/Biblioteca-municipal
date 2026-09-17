import * as readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';
import {LivroFisico, Ebook } from './TiposDeltens.js';  
import {Leitor } from './Leitor.js';
const rl = readline.createInterface ({ input, output });

(async function iniciarSistema(){
let livro;
    console.log("=== SISTEMA DE CADASTRO DE ITENS ===");
    
    const nome = await rl.question("Digite o nome do leitor: ");
    const idade = parseInt (await rl.question("Digite a idade do leitor: ")
    );

    const leitor = new Leitor(nome, idade);
    console.log("\nEscolha o item que quer cadastrar: ");
    console.log(" 1 - Livro Físico ");
    console.log(" 2 - E-book ");
    const tipoLivro = await rl.question("Digite a opção: ");

    if (tipoLivro === "1" || tipoLivro === "2") {
        const titulo = await rl.question("Digite o título: ");
        const autor = await rl.question("Digite o nome do autor: ");
        const anoPublicacao = Number(await rl.question("Digite o ano de publicação: "));

        switch (tipoLivro) {
            case "1":
                const corredor = await rl.question("Digite o corredor: ");
                livro = new LivroFisico(titulo, autor, anoPublicacao, corredor);
                break;
            case "2":
                const formatoArquivo = await rl.question("Digite o formato do arquivo (PDF, EPUB, MOBI...): ");
                livro = new Ebook(titulo, autor, anoPublicacao, formatoArquivo);
        }
    }
        else {
            throw new Error("Opção inválida!");
        }

        const diasAtraso = parseInt(await rl.question("Dias de atraso: "));

        const valorMulta = livro.calcularMulta(diasAtraso);

        if (livro.titulo === undefined || livro.autor === undefined) {
            console.log("\n [ERRO]: Titulo de livro ou autor não identificados. ");
        }
        else {
            console.log("\n================================");
            console.log("===== Etiqueta de Empréstimo =====")
            console.log("================================");
            console.log(`Titulo do livro: ${livro.titulo}`);
            console.log(`Autor do livro: ${livro.autor}`);
            console.log(`Ano de Publicacao: ${livro.anoPublicacao}`);
            console.log(`\n Valor da multa por atraso:: R$ ${valorMulta.toFixed(2)}`);
        }

      rl.close();  
    }
    
)();
