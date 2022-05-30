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

### 13 - Crie testes de integração que cubram no mínimo 60% dos arquivos em `src`, com um mínimo de 100 linhas cobertas

- Os testes de integração devem ser criados na pasta `./src/integration-tests`, essa pasta **não pode ser renomeada ou removida**;

- O arquivo `change.me.test.js` pode ser alterado, renomeado ou removido;

- Os testes devem ser criados usando o instrumental e boas práticas apresentado nos conteúdos de testes do course;

- Para rodar os testes, utilize o comando `npm run dev:test`;

- Para visualizar a cobertura, utilize o comando `npm run dev:test:coverage`;

**Além disso, as seguintes verificações serão feitas:**

- **[Será validado que o teste cobre o valor esperado]**

Nenhum teste pode ser pulado;
O resultado do percentual total de cobertura deve ser igual ou maior que `60`;
O resultado do numero total de linhas cobertas deve ser igual ou maior que `100`.

### 14 - Crie testes de integração que cubram no mínimo 90% dos arquivos em `src`, com um mínimo de 150 linhas cobertas

- Os testes de integração devem ser criados na pasta `./src/integration-tests`, essa pasta **não pode ser renomeada ou removida**;

- O arquivo `change.me.test.js` pode ser alterado, renomeado ou removido;

- Os testes devem ser criados usando o instrumental e boas práticas apresentado nos conteúdos de testes do course;

- Para rodar os testes, utilize o comando `npm run dev:test`;

- Para visualizar a cobertura, utilize o comando `npm run dev:test:coverage`;

**Além disso, as seguintes verificações serão feitas:**

- **[Será validado que o teste cobre o valor esperado]**

Nenhum teste pode ser pulado;
O resultado do percentual total de cobertura deve ser igual ou maior que `90`;
O resultado do numero total de linhas cobertas deve ser igual ou maior que `150`.

---

## Depois de terminar o desenvolvimento (opcional)

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-00`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

# Revisando um pull request

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

#VQV

---

# Avisos finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://bit.ly/39qMu3s)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?
