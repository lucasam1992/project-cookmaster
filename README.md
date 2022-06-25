# Boas vindas ao repositório do projeto Cookmaster!

O projeto consiste em uma API que realiza um CRUD (Create, Read, Update e Delete) de receitas. Além disso, será possível cadastrar usuários, onde apenas essas pessoas poderão acessar, modificar, criar e deletar as receitas. Foram feitas autenticações de usuários através do pacote `jsonwebtoken`. A implementação do código foi feita baseada na arquitetura de software MSC (Model-Service-Controller).

## Banco de Dados do Projeto

O banco de dados possui duas tabelas `users` e `recipes`

A tabela `users` contém os seguintes atributos: <br />

{ "name" : "Erick Jacquin", "email" : "erickjacquin@gmail.com", "password" : "12345678", "role" : "user" }

A tabela `recipes` contém os seguintes atributos: <br />

{ "name" : "Receita do Jacquin", "ingredients" : "Frango", "preparation" : "10 minutos no forno" }

## Tecnologias Usadas

- Node.js
- Express.js
- Javascript
- MongoDB
- JsonWebToken

## O que foi Desenvolvido

### 1 - Criação do endpoint POST `/users`

![Usuário Cadastrado](./public/usuariocriadocomsucesso.png)

### 2 - Criação do endpoint POST `/login`

![Login com Sucesso](./public/logincomsucesso.png)

### 3 - Criação do endpoint POST `/recipes`

![Receita com Sucesso](./public/receitacomsucesso.png)

### 4 - Criação do endpoint GET `/recipes`

- Sem estar autenticado

![Receita com Sucesso](./public/listarreceitas.png)

- Com autenticação

![Receita com Sucesso](./public/listarreceitas.png)

### 5 - Criação do endpoint GET `/recipes/:id`

- Sem estar autenticado

![Listar uma Receita](./public/listarumareceita.png)

- Com autenticação

![Listar uma Receita](./public/listarumareceita.png)

### 6 - Criação de uma query em mongo que inseri uma pessoa usuária com permissões de admin

`{ name: 'admin', email: 'root@email.com', password: 'admin', role: 'admin' }`

### 7 - Criação do endpoint PUT `/recipes/:id`

![Editar uma Receita](./public/editarcomsucesso.png)

### 8 - Criação do endpoint DELETE `/recipes/:id`

![Excluir uma Receita](./public/excluircomsucesso.png)

### 9 -  Criação do endpoint PUT `/recipes/:id/image/`

![Foto Autenticada](./public/fotocomsucesso.png)

### 10 - Criação do endpoint GET `/images/<id-da-receita>.jpeg`

![Foto Autenticada](./public/imagemrecetornada.png)

### 11 - Criação do endpoint POST `/users/admin` 

![Criar admin](./public/criaradmin.png)

## Criação de Testes

- Os testes de integração serão desenvolvidos no diretório `./src/integration-tests`

## Rodando o Projeto Localmente

1° `git clone https://github.com/lucasam1992/project-cookmaster.git` - Clone o repositório para sua máquina <br />
2° `cd project-cookmaster` - Entre na pasta do repositório clonado <br />
3° `npm install` - Instale as dependências <br />
4° `npm start` - Execute o programa <br />

**Sugestão: Baixe o programa Insomina para executar cada operação do CRUD: https://snapcraft.io/install/insomnia/ubuntu

## Autor

- Lucas Machado