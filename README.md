# Projeto API de Blogs

Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog. A aplicação foi copnstruída em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Foi desenvolvido os endpoints que estão conectados ao banco de dados seguindo os princípios do REST;

  2. Para fazer um post é necessário usuário e login, envolvendo a **relação entre** `user` e `post`; 

  3. Foi necessária a utilização de categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.

## Endpoints

- POST /login : Realização do login do usuário cadastrado. Retorna um token gerado por JWT. O corpo da requisição deverá seguir o formato abaixo: 
```javascript
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```
- POST /user : Adicionar um novo usuário na tabela no banco de dados. O corpo da requisição deverá seguir o formato abaixo: 
```javascript
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
}
```
- GET /user : Trazer todos os usuários do banco de dados. O usuário deve estar logado e o token deve ser válido. Não deve ser retornado o password dos usuários.

- 🔒 GET /user/:id : Apresenta o usuário baseado no id do banco de dados se ele existir. O usuário deve estar logado e o token deve ser válido. 

- 🔒 POST /categories : Adicionar uma nova categoria a sua tabela no banco de dados. O usuário deve estar logado e o token deve ser válido. O corpo da requisição deverá seguir o formato abaixo:
```javascript
{
  "name": "Typescript"
}
```
- 🔒 GET /categories : Retorna todas categorias do banco de dados. O usuário deve estar logado e o token deve ser válido.

- 🔒 POST /post : Adiciona um nova postagem no blog e vincula com as categorias nas tabelas no banco de dados. O usuário autor deve estar logado e o token deve ser válido. O corpo da requisição deverá seguir o formato abaixo:
```javascript
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```
- 🔒 GET /post : Retorna todos as postagens no blog, quais os usuários autores delas e suas respectivas categorias. O usuário deve estar logado e o token deve ser válido.

- 🔒 GET /post/:id : Retorna a postagem baseado no id do banco de dados se ela existir. O usuário deve estar logado e o token deve ser válido.

- 🔒 PUT /post/:id : Altera uma postagem do banco de dados, se ela existir. Apenas o usuário autor pode realizar a alteração. O usuário deve estar logado e o token deve ser válido. O corpo da requisição deverá seguir o formato abaixo:
```javascript
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
```

- 🔒 DELETE /post/:id : Deleta uma postagem baseado no id do banco de dados, se ela existir. Apenas o usuário autor pode apagar suas postagens. O usuário deve estar logado e o token deve ser válido. 

- 🔒 DELETE /user/me : Deleta o usuário logado, baseado no id que está dentro do token. O usuário deve estar logado e o token deve ser válido. 

- 🔒 GET /post/search?q=:searchTerm : Retorna as postagens do banco de dados, se ele existir, conforme termo pesquisado. Caso nenhum blog post satisfaça a busca, apresenta um array vázio. O usuário deve estar logado e o token deve ser válido. 