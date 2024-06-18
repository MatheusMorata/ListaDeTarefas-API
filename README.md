# Lista de tarefas
<p>Lista de Tarefas é um projeto completo desenvolvido utilizando JavaScript, com Node.js para o backend e React para o frontend. Este projeto consiste em um sistema CRUD (Create, Read, Update, Delete) de tarefas, onde os usuários podem gerenciar suas atividades diárias de maneira eficiente.

No backend, são utilizadas tecnologias como Node.js para o servidor, Express.js como framework web e PostgreSQL como banco de dados relacional para armazenamento persistente das tarefas. O Sequelize é utilizado como ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados, garantindo uma integração eficiente entre o aplicativo e a camada de persistência.

A API RESTful permite que o frontend se comunique de forma eficaz com o backend, possibilitando operações de CRUD completas, como adição, leitura, atualização e exclusão de tarefas de forma segura e escalável.

No frontend, o React é utilizado para criar uma interface de usuário responsiva e interativa. O projeto é estruturado de forma modular, com componentes reutilizáveis para facilitar o desenvolvimento e manutenção do código. A interface permite aos usuários visualizar suas tarefas em uma lista intuitiva, onde podem adicionar novas tarefas, marcar como concluídas, editar detalhes e remover tarefas conforme necessário.</p>

## Requisitos 

- Postgresql
- Node.JS
- Git

<b>OBS:</b> Realize os downloads das mesmas.

## Como rodar?

- Realize o clone do repositório em seu computador


```
git clone https://github.com/MatheusMorata/ListaDeTarefas-API.git'.
```


- Acesse o repositório via terminal

- Baixe as dependencias. <b>OBS:</b> Certifique-se de ter o Node.JS e ter acessado o diretório via terminal.


```
npm install dotenv
npm install Sequelize
npm install pg pg-hstore
npm install express
npm install swagger-ui-express
npm install swagger-autogen
```

- Altere o arquivo .env, sua credencias. <b>OBS:</b> Não altere o nome do banco de dados.

- Execute o comando:

```
psql -U usuario_banco_de_dados
```

- Digite a senha do seu banco de dados.

- Execute o comando:


```
\i BD.sql
```

- Abra outra terminal acessando novamente o repositório. <b>OBS:</b> Os scripts a seguir só executados apenas no windows.

- Em um, terminal execute o comando

```
backend.bat
```

- Em outro, execute o comando

```
frontend.bat
```