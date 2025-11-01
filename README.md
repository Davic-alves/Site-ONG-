# Site ONG — CONECTA

![Status: Em Desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![Tecnologia: SPA](https://img.shields.io/badge/tecnologia-SPA%20(JS)-yellow)
![Responsivo: Sim](https://img.shields.io/badge/responsivo-sim-brightgreen)

Projeto acadêmico de front-end que simula uma plataforma real para a ONG "Conecta". O site foi desenvolvido em etapas, evoluindo de um site HTML estático para uma **Single Page Application (SPA)** dinâmica e interativa, aplicando conceitos avançados de CSS3 modular e JavaScript (ES6+).

O objetivo é demonstrar competências técnicas em HTML, CSS e JavaScript, além de boas práticas de desenvolvimento como componentização, acessibilidade e versionamento.

---

## ✨ Funcionalidades Principais

* **Arquitetura SPA:** O site funciona como uma Single Page Application. A navegação entre "Início", "Projetos" e "Cadastro" é feita dinamicamente com JavaScript (Fetch API e History API), sem recarregar a página.
* **Roteamento Dinâmico:** Um roteador JavaScript modular (`router.js`) carrega os "templates" de página (da pasta `/pages`) e os injeta na DOM.
* **Design Responsivo (Mobile-First):** Toda a interface foi construída primeiro para dispositivos móveis e depois adaptada para tablets e desktops usando Media Queries.
* **Sistema de Design (CSS):** Implementa um sistema de design robusto com variáveis CSS (`:root`) para cores, tipografia e espaçamento modular (base 8px).
* **CSS Modular:** Os estilos são organizados em módulos (BEM-like) por funcionalidade (design system, layout, navegação, componentes, etc.) e importados em um arquivo principal.
* **Navegação Interativa:** Menu com submenu "dropdown" funcional em desktop (hover) e mobile (clique, controlado por JS).
* **Validação de Formulário (JS):** O formulário de cadastro possui scripts para máscaras de input (CPF, Telefone, CEP) e um sistema de verificação de consistência de dados (validação de senhas).
* **Componentes Reutilizáveis:** O projeto utiliza componentes de interface como Cards, Botões com estados (`:hover`, `:focus`), Alertas de feedback e Tags.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica, atributos de acessibilidade (ARIA).
* **CSS3:** Flexbox, Grid Layout, Variáveis CSS, Media Queries, Animações (`transition`).
* **JavaScript (ES6+):**
    * Manipulação do DOM
    * Eventos
    * Módulos (`import`/`export`)
    * Fetch API (para carregar os templates)
    * History API (`pushState`, `popstate`)

## 📁 Estrutura de Pastas

A arquitetura do projeto foi organizada para refletir a modularidade de uma SPA:
