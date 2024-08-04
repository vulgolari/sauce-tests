# Sauce Tests

Este repositório contém testes automatizados para o site [Sauce Demo](https://www.saucedemo.com/) usando [Cypress](https://www.cypress.io/). O objetivo é cobrir cenários de teste para funcionalidades críticas, incluindo login, visualização de produtos, gerenciamento de carrinho e processos de checkout.

## Estrutura do Projeto

```
sauce-tests/
├── cypress/
│   ├── fixtures/
│   │   └── credentials.json
│   ├── integration/
│   │   ├── cartManagement.spec.js
│   │   ├── checkout.spec.js
│   │   ├── login.spec.js
│   │   └── productView.spec.js
│   ├── support/
│   │   ├── pageObjects/
│   │   │   ├── CartPage.js
│   │   │   ├── CheckoutPage.js
│   │   │   ├── LoginPage.js
│   │   │   └── ProductPage.js
│   │   ├── commands.js
│   │   └── index.js
├── node_modules/
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

## Como Configurar

1. **Clone o Repositório:**
   ```sh
   git clone git@github.com:vulgolari/sauce-tests.git
   cd sauce-tests
   ```

2. **Instale as Dependências:**
   ```sh
   npm install
   ```

3. **Abra o Cypress:**
   ```sh
   npm run test
   ```

## Estrutura dos Testes

### **Fixtures**
- **credentials.json:** Contém credenciais para testes de login, incluindo usuários válidos e inválidos.

### **Integration**
- **cartManagement.spec.js:** Testes para adicionar e remover produtos do carrinho.
- **checkout.spec.js:** Testes para o processo de checkout, incluindo finalização e cancelamento de compras.
- **login.spec.js:** Testes de login com credenciais válidas e inválidas.
- **productView.spec.js:** Testes para a visualização de produtos após o login.

### **Support**
- **pageObjects:** Contém classes que representam as páginas do site, incluindo CartPage, CheckoutPage, LoginPage e ProductPage.
- **commands.js:** Comandos personalizados do Cypress.
- **index.js:** Arquivo de inicialização do Cypress.

## Comandos Customizados

Os comandos personalizados são definidos no arquivo `commands.js` e incluem:
- `cy.login(username, password)`: Faz o login com o nome de usuário e senha fornecidos.
- `cy.visit(path)`: Visita uma página específica.

## Como Executar os Testes

1. **Iniciar os Testes no Cypress:**
   ```sh
   npm run test
   ```

2. **Executar Testes Especificamente:**
   Você pode executar arquivos de teste específicos usando o Cypress GUI.

## Casos de Teste

### **Login**
- Testa o login com usuários válidos e inválidos, verificando redirecionamento e mensagens de erro.

### **Visualização de Produtos**
- Verifica se a lista de produtos é exibida corretamente após o login.

### **Gerenciamento de Carrinho**
- Adiciona produtos ao carrinho, remove produtos do carrinho e verifica o estado do carrinho.

### **Checkout**
- Testa o fluxo de finalização de compra e o cancelamento do checkout, incluindo verificação de sucesso da compra.

## Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/your-feature`).
3. Faça suas alterações e commit (`git commit -m 'Add some feature'`).
4. Faça o push para a branch (`git push origin feature/your-feature`).
5. Crie um Pull Request.

## Licença

Este projeto está licenciado sob os termos da licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
