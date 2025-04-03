# 📌 Testes Automatizados com Cypress

Este repositório contém testes automatizados escritos em **Cypress** para validar funcionalidades de duas aplicações diferentes:
- **Cypress Example** (site de demonstração do Cypress)
- **Sauce Demo** (plataforma de testes para automação de e-commerce)

## 📂 Estrutura do Repositório

```
.
├── cypress/
│   ├── e2e/
│   │   ├── testExample/
│   │   │   ├── spec.cy.js  # Testes para Cypress Example
│   │   ├── AutomationPractice/
│   │   │   ├── spec.cy.js  # Testes para Sauce Demo
│   ├── support/
│   │   ├── commands.js  # Comandos customizados para facilitar os testes
├── cypress.config.js  # Configuração do Cypress
├── README.md  # Documentação do projeto
```

---

## 🚀 Como Executar os Testes

### 📌 1. Requisitos
Antes de rodar os testes, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

### 📌 2. Instalação do Cypress

Caso o Cypress não esteja instalado, rode:
```sh
npm install cypress --save-dev
```

### 📌 3. Rodando os Testes

**Abrir a interface do Cypress:**
```sh
npx cypress open
```

**Executar todos os testes no terminal:**
```sh
npx cypress run
```

**Executar um teste específico:**
```sh
npx cypress run --spec "cypress/e2e/testExample/spec.cy.js"
```

---

## 📋 Descrição dos Testes

### 🔹 `testExample/spec.cy.js`

Testa funcionalidades do site de exemplo do Cypress:
1. **Verificação do título da página**
2. **Navegação para a seção de comandos de ações**
3. **Preenchimento e submissão de um formulário**

### 🔹 `AutomationPractice/spec.cy.js`

Testa funcionalidades do site Sauce Demo:
1. **Login com credenciais válidas**
2. **Erro ao fazer login com credenciais inválidas**
3. **Adicionar um produto ao carrinho**
4. **Remover um produto do carrinho**
5. **Finalizar uma compra**

### 🔹 Comando Customizado
Foi criado um comando customizado para facilitar o login:
```javascript
Cypress.Commands.add('loginSauceDemo', (url) => {
  cy.visit(url);
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
});
```

## 🛠 Tecnologias Utilizadas
- **Cypress** - Framework para testes automatizados
- **JavaScript** - Linguagem usada para escrever os testes

---

## 📜 Licença
Este projeto é excutado apenas para fins educacionais e aprimoramento 🚀

