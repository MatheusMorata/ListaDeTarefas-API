# Lista de tarefas
<p>Lista de Tarefas é um projeto completo desenvolvido utilizando JavaScript, com Node.js para o backend e React para o frontend. Este projeto consiste em um sistema CRUD (Create, Read, Update, Delete) de tarefas, onde os usuários podem gerenciar suas atividades diárias de maneira eficiente.

No backend, são utilizadas tecnologias como Node.js para o servidor, Express.js como framework web e PostgreSQL como banco de dados relacional para armazenamento persistente das tarefas. O Sequelize é utilizado como ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados, garantindo uma integração eficiente entre o aplicativo e a camada de persistência.

A API RESTful permite que o frontend se comunique de forma eficaz com o backend, possibilitando operações de CRUD completas, como adição, leitura, atualização e exclusão de tarefas de forma segura e escalável.

No frontend, o React é utilizado para criar uma interface de usuário responsiva e interativa. O projeto é estruturado de forma modular, com componentes reutilizáveis para facilitar o desenvolvimento e manutenção do código. A interface permite aos usuários visualizar suas tarefas em uma lista intuitiva, onde podem adicionar novas tarefas, marcar como concluídas, editar detalhes e remover tarefas conforme necessário.</p>

## Requisitos 

- Postgresql
- Node.JS
- Git

<b>OBS:</b> Realize o download dos mesmos.

## Como instalar?

- Faça o clone do repositório em seu computador.


```
git clone https://github.com/MatheusMorata/ListaDeTarefas-API.git'.
```


- Acesse o repositório via terminal

- Baixe as dependencias. 


```
npm install dotenv
npm install sequelize
npm install pg pg-hstore
npm install express
npm install cors
npm install swagger-ui-express
npm install swagger-autogen

```

- Altere o arquivo .env, com suas credencias. <b>OBS:</b> Não altere o nome do banco de dados.

- Crie um banco de dados no seu postegresql com o nome tarefas, caso não consiga siga o passo a seguir.

- Execute o comando:

```
psql -U usuario_banco_de_dados
```

- Digite a senha do seu banco de dados.

- Execute o comando:


```
\i BD.sql
```
- Feche o terminal

- Abra outra terminal acessando novamente o repositório. <b>OBS:</b> Os scripts a seguir são executados apenas no windows.

- Terminal execute o comando:

```
backend.bat
```

- Agora abra outro terminal, novamente acessando o repositório. Execute os seguintes comando:

```
cd frontend
npm install
frontend.bat
```


## diagrama de arquitetura e fluxo de dados.

<img src="diagrama/Diagrama.png" />

## Documentação da api

<p>link da documentação da api</p>

```
http://localhost:3001/docs
```