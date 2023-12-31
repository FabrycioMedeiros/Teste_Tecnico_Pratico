# API de Controle de Veículos

Este projeto é uma API desenvolvida para gerenciar o cadastro de motoristas, automóveis e locação de veículos. Foi construído utilizando as seguintes tecnologias:

- [Express.js](https://expressjs.com/): Um framework web para Node.js que simplifica o desenvolvimento de APIs.
- [Mongoose](https://mongoosejs.com/): Uma biblioteca para modelagem de objetos MongoDB.
- [Postman](https://www.postman.com/): Uma ferramenta para testar APIs.
- [Robo3T](https://robomongo.org/): Um cliente GUI para MongoDB.

## Funcionalidades

O projeto oferece as seguintes funcionalidades:

### Automóvel

- Cadastrar um novo automóvel
- Atualizar um automóvel cadastrado
- Excluir um automóvel cadastrado
- Recuperar um automóvel cadastrado pelo seu identificador único
- Listar os automóveis cadastrados. Deve ser possível filtrar a listagem dos automóveis por cor e marca.

### Motorista

- Cadastrar um novo motorista
- Atualizar um motorista cadastrado
- Excluir um motorista cadastrado
- Recuperar um motorista cadastrado pelo seu identificador único
- Listar os motoristas cadastrados. Deve ser possível filtrar a listagem dos motoristas por nome.

### Aluguel

- Criar um registro que represente a utilização de um automóvel por um motorista, com uma data de início e um texto do motivo de utilização.
- Finalizar a utilização de um automóvel por um motorista guardando a data de finalização
- Listar os registros de utilização cadastrados no sistema com o nome do motorista e as informações do automóvel utilizado

## Postman API

- A coleção contendo as funcionalidades encontra-se na pasta resources

## Configuração

1. Clone este repositório em sua máquina local:

```bash
git clone git@github.com:FabrycioMedeiros/Teste_Tecnico_Pratico.git

```

2. Instalar as bibliotecas:

```bash
npm install

```

3. Rodar aplicação local:

```bash
npm run dev
```
