# <p align = "center"> Projeto DrivenPass </p>

<p align="center">
   <img src="https://user-images.githubusercontent.com/98189571/179160172-7039b844-99f4-473e-b21b-1405b2dfb9af.svg" alt="dp" height="140" width="140"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Matheus_Tassi-4dae71?style=flat-square" />
</p>

## :clipboard: Descrição

Navegar na internet pode ser uma atividade muito divertida, mas ao mesmo tempo, muito perigosa. Inúmeros estudos e levantamentos (nacionais e internacionais) mostram que o número de golpes virtuais não para de crescer. O que levanta a questão: como nos proteger? Existem várias formas diferentes de se proteger. Tudo começa com o uso de senhas diferentes e seguras. Neste projeto, foi desenvolvido a api da DrivenPass, um gerenciador de senhas!

---

## :computer: Tecnologias e Conceitos

- JWTs & refresh tokens
- Node.js
- Express.js
- TypeScript
- Postgresql
- Heroku

---

## :rocket: Rotas

```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body: {
        "email": "fulano@gmail.com",
        "password": "12345"
    }
```

```yml
POST /signin
    - Rota para fazer login
    - headers: {}
    - body: {
        "email": "fulano@gmail.com",
        "senha": "12345"
    }
```

```yml
POST /createcredential (autenticada)
    - Rota para criar uma credencial
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "url": "http://site.com",
        "username": "fulano",
        "password":"12345",
        "title":"credencial teste"
    }
```

```yml
GET /getcredential/:credentialId (autenticada)
    - Rota para listar uma credencial pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /getcredentials (autenticada)
    - Rota para listar todas as credenciais do usuario logado
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /deletecredential/:credentialId (autenticada)
    - Rota para deletar uma credencial pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /createnote (autenticada)
    - Rota para criar uma nota
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title":"titulo para nota",
        "note":"nota escrita"
    }
```

```yml
GET /getnote/:noteId (autenticada)
    - Rota para listar uma nota pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /getnotes (autenticada)
    - Rota para listar todas as notas do usuario logado
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /deletenote/:noteId (autenticada)
    - Rota para deletar uma nota pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /createcard (autenticada)
    - Rota para criar um cartão
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "cardNumber":"134264538378",
        "cardName":"FULANO B SILVA",
        "securityCode":"123",
        "expirationDate":"12/23",
        "password":"12345",
        "isVirtual":false,
        "type":"credit" | "debit" | "both",
        "title":"meu cartão"
    }
```

```yml
GET /getcard/:cardId (autenticada)
    - Rota para listar um cartão pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /getcards (autenticada)
    - Rota para listar todos os cartões do usuario logado
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /deletecard/:cardId (autenticada)
    - Rota para deletar um cartão pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /createwifi (autenticada)
    - Rota para criar um wifi
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "name":"wificasa",
        "password":"123456",
        "title":"wifi do vzinho"
    }
```

```yml
GET /getwifi/:wifiId (autenticada)
    - Rota para listar um wifi pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /getwifi (autenticada)
    - Rota para listar todos os wifis do usuario logado
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /deletewifi/:wifiId (autenticada)
    - Rota para deletar um wifi pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /createdocument (autenticada)
    - Rota para criar um document
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "docType":"RG" | "CNH" 
        "completeName":"Fulano da Silva Santos"
        "emissionDate":"01/22"
        "expirationDate":"01/27"
        "registerDate":"564368"
        "agency":"SIGLA"
    }
```

```yml
GET /getdocument/:documentId (autenticada)
    - Rota para listar um document pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /getdocument (autenticada)
    - Rota para listar todos os documents do usuario logado
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /deletedocument/:documentId (autenticada)
    - Rota para deletar um document pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

---

## 🏁 Rodando a aplicação

Certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/matheusfacciolla/projeto19-drivenpass
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor

```
npm run dev
```
