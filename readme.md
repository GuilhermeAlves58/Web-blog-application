# Web Blog - Node.js + Express + EJS

Este projeto é uma aplicação de **Blog Web** desenvolvida com **Node.js, Express.js e EJS**.

O principal objetivo foi praticar a construção de um **CRUD completo no servidor**, trabalhando com **rotas, renderização dinâmica, formulários e manipulação de dados em memória**, sem uso de banco de dados.

A proposta do projeto é permitir que o usuário **crie, visualize e edite posts de forma simples**, com uma interface limpa e responsiva.

---

# 🎯 Objetivo do projeto

O intuito principal deste projeto foi fortalecer os conhecimentos em:

* criação de servidores com **Node.js**
* gerenciamento de rotas com **Express.js**
* renderização de páginas dinâmicas com **EJS**
* envio de dados via **formulários HTML**
* implementação de um **CRUD completo**
* organização de arquivos em um projeto web real
* estilização simples e agradável com **CSS**

Este projeto foi pensado principalmente para consolidar a **lógica do lado do servidor**, que é o foco principal do estudo.

---

# Features

## ✅ Create Post

* criação de novos posts
* formulário com título e conteúdo
* geração de ID único para cada post

## ✅ View Posts

* listagem de todos os posts na página inicial
* renderização dinâmica com EJS
* exibição em formato de cards

## ✅ Update Post

* edição de posts existentes
* formulário pré-preenchido com os dados atuais
* atualização em tempo real no array

## ✅ Delete Post

* remoção de posts diretamente pela interface
* exclusão por ID

## ✅ Styling

* layout simples e bonito
* responsivo para desktop e mobile
* foco em boa experiência do usuário

---

# 🛠️ Tecnologias utilizadas

* **Node.js**
* **Express.js**
* **EJS**
* **HTML5**
* **CSS3**

---

# 📁 Estrutura do projeto

```bash
WEB BLOG/
│
├── public/
│   └── styles.css
│
├── views/
│   ├── index.ejs
│   ├── create.ejs
│   └── edit.ejs
│
├── app.js
├── package.json
└── package-lock.json
```

---

# ▶️ Como executar

```bash
npm install
npm start
```

Depois acesse:

```bash
http://localhost:3000
```

---

# 📚 Aprendizados

Durante o desenvolvimento deste projeto, os principais aprendizados foram:

* diferença entre **rotas e arquivos físicos**
* uso de **params e req.body**
* atualização de dados em memória
* renderização dinâmica com arrays no EJS
* fluxo completo de requisições HTTP
* organização de um projeto backend real

---

# 👨‍💻 Autor

Projeto desenvolvido por **Guilherme Alves Marcondes dos Santos** como prática de estudos em desenvolvimento backend.
