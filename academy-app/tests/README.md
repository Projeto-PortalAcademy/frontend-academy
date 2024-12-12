
# Documentação de Teste Automatizado com Selenium

## Repositório do Projeto

[Link para o Repositório](#https://github.com/Projeto-PortalAcademy/PortalAcademyFullStack/tree/main/frontend/academy-app/tests)

## **1. O que foi Feito**

Foi desenvolvido um teste automatizado utilizando Selenium WebDriver para verificar o fluxo de login e navegação em uma aplicação web local. O teste realiza as seguintes ações:

- **Login na Aplicação:**
  - Acessa a URL principal.
  - Preenche os campos de e-mail e senha.
  - Clica no botão "Entrar" e aguarda o redirecionamento para o painel principal.

- **Navegação entre Páginas:**
  - Verifica a presença de links de navegação.
  - Clica nos links e aguarda o carregamento completo das páginas.
  - Confirma que elementos esperados estão presentes nas páginas carregadas.

## **2. Como Executar**

### **Pré-requisitos:**
- Python 3.x instalado.
- Navegador Google Chrome atualizado.

### **Instalação das Dependências:**

1. Clone o repositório:
   ```bash
   git clone https://github.com/Projeto-PortalAcademy/frontend-academy
   cd frontend-academy
   ```

2. Crie um ambiente virtual (opcional, mas recomendado):
   ```bash
   python -m venv venv
   source venv/bin/activate   # Linux/Mac
   venv\Scripts\activate    # Windows
   ```

3. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   pip install selenium webdriver-manager
   ```

### **Como Rodar o Teste:**

1. Certifique-se de que a aplicação web esteja rodando localmente em `http://localhost:3000`.

2. Entre no caminho da pasta:

    ```bash
    cd .\academy-app\
    cd .\tests\
    ```

3. Execute o teste:
   ```bash
   python test_login_navigation.py
   ```

### **Resultado Esperado:**
- Login realizado com sucesso.
- Mensagens indicando que cada página foi carregada corretamente.

## **3. Testes Implementados**

### **Testes de Login:**
- Preenchimento de e-mail e senha.
- Verificação do redirecionamento para a página de dashboard após o login.

### **Testes de Navegação:**
- Visita às seguintes páginas e verificação de elementos principais:
  - `/frequencia`
  - `/dashboards`
  - `/areas`
  - `/usuarios`
  - `/avaliacao`

### **Mecanismos de Validação:**
- Uso de `WebDriverWait` para garantir o carregamento completo das páginas.
- Confirmação de elementos presentes nas páginas.
