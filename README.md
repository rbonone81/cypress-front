# cypress-front
Projeto de automação de testes web utilizando Cypress.
Feita a validação do fluxo de checkout de um e-commerce de teste bem simples (https://www.saucedemo.com/v1/). 
Geração de relatórios HTML e XML.
Integração com Gifthub Actions para CI e armazenamento de artefatos.

## Pré-requisitos
- Node JS

## Dependências
- Cypress: 13.15.2
- Cypress Multi Reporters: 2.2.1
- Mochawesome Reporter: 3.6.1
- Mocha Junit Reporter: 2.0.4

## Instalação
Instale cypress-front com npm.

```bash
  cd cypress-front
  npm install
```

## Rodando os testes
Para rodar os testes, rode o seguinte comando.

```bash
  npx cypress run
```
## Relatório dos testes
.reports/html
.reports/junit