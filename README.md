# 📚 Sistema de Gestão de Biblioteca Municipal (POO com Node.js)

> Aplicação Back-End interativa via linha de comando (CLI) desenvolvida em JavaScript/Node.js puro para exemplificar a aplicação prática dos **4 Pilares da Programação Orientada a Objetos (POO)**.

---

## 📋 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Contexto de Negócio (Briefing)](#-contexto-de-negócio-briefing)
- [Os 4 Pilares da POO Aplicados](#-os-4-pilares-da-poo-aplicados)
- [Estrutura e Arquitetura do Projeto](#-estrutura-e-arquitetura-do-projeto)
- [Regras de Negócio e Validações](#-regras-de-negócio-e-validações)
- [Pré-requisitos e Como Executar](#-pré-requisitos-e-como-executar)
- [Exemplo de Uso (Fluxo do Terminal)](#-exemplo-de-uso-fluxo-do-terminal)

---

## 📖 Sobre o Projeto

O **Sistema de Gestão de Biblioteca Municipal** é uma aplicação simulada de back-end desenvolvida do zero, sem uso de *frameworks* ou bibliotecas externas. Seu foco principal é demonstrar como traduzir requisitos e regras de negócio reais para **Classes**, **Atributos**, **Métodos** e barreiras de segurança rigorosas usando JavaScript moderno (ES Modules).

---

## 🎯 Contexto de Negócio (Briefing)

A Biblioteca Municipal sofria com problemas de inconsistência de dados: cadastro de livros sem título, aceitação de datas inválidas e incerteza no cálculo de multas de devolução.

**Requisitos do Cliente:**
1. **Sem Itens Genéricos:** Não é permitido cadastrar um "Item" genérico. O sistema só aceita cadastro explícito de **Livro Físico** ou **E-book**.
2. **Cálculo Polimórfico de Multas:**
   - **Livro Físico:** Cobra multa de **R$ 2,50 por dia de atraso**.
   - **E-book:** Não há devolução física. Caso haja atraso, o arquivo é bloqueado no dispositivo do leitor (**multa de R$ 0,00** e alerta de *Acesso Revogado*).
3. **Restrição para Leitores:** Leitores menores de 12 anos necessitam de autorização do responsável para efetuarem o cadastro.

---

## 🧩 Os 4 Pilares da POO Aplicados

| Pilar | Como foi aplicado no projeto |
| :--- | :--- |
| **Abstração** | A classe `ItemBase` atua como uma abstração puramente conceitual. Utiliza `new.target` no construtor para impedir que seja instanciada diretamente e define a assinatura do método abstrato `calcularMulta`. |
| **Encapsulamento** | Uso de campos privados `#` (como `#anoPublicacao` e `#idade`) controlados por *getters* e *setters* com validações atômicas que garantem a integridade dos dados. |
| **Herança** | As classes `LivroFisico` e `Ebook` herdam os atributos básicos (`titulo`, `autor`, `#anoPublicacao`) da classe mãe `ItemBase` reutilizando código via `super()`. |
| **Polimorfismo** | O método `calcularMulta(diasAtraso)` é reescrito (*override*) em `LivroFisico` e `Ebook`, permitindo que o mesmo comando reaja de formas distintas conforme o tipo de objeto. |

---

## 📁 Estrutura e Arquitetura do Projeto

```text
biblioteca-municipal/
│
├── ItemBase.js       # Classe mãe (Abstração, Validação de Ano, Método Abstrato)
├── TiposDeItens.js   # Classes filhas (LivroFisico e Ebook com Polimorfismo)
├── Leitor.js         # Classe Leitor (Encapsulamento da Idade)
├── index.js          # Ponto de entrada CLI (Interface interativa no terminal)
└── package.json      # Configuração do projeto Node.js (ES Modules habilitado)