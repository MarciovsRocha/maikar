# maikar

## Como rodar o projeto

### BackEnd 

* O serviço de BackEnd está conectado à um banco MySQL de acordo com o arquivo [.env](backend/.env) (vide também o arquivo [db.js](backend/config/db.js))
  * Obs.: Em sistemas baseados em Windows não foi possível utilizar o .env portanto deve-se realizar o apontamento manual da base de dados
* Execute um `npm install` dentro da pasta do projeto backend
* Rode o aplicativo de [server.js](backend/server.js) com seu Node

### Front-End

* O serviço de FrontEnd está conectado ao serviço BackEnd via `localhost:3000` (garanta que o Serviço backend esteja rodando nessa porta) 
* Execute um `npm install` dentro da pasta do projeto frontend
* Execure um `npm start` para iniciar o projeto
* Login: Utilizar algum usuário abaixo
  * user: vinicius@example.com - pass: hashedpass1
  * user: marcio.souza@tecpuc.com.br - pass: SenhaForte
  * user: carla@example.com - pass: hashedpass2
  * user: lucas@example.com - pass: hashedpass3
  * user: fernanda@example.com - pass: hashedpass4
  * user: bruno@example.com - pass: hashedpass5

### Banco de Dados SQL

executar o arquivo init.sql em seu Database para criar o banco de dados

