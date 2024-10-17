# Academy Project

Este repositório contém o frontend do projeto **Academy**, desenvolvido utilizando a última versão do Next.js, parte de uma arquitetura baseada em microserviços.

## Descrição do Projeto

O **Academy** é uma plataforma para gestão do coordenador Academy 2RP. A aplicação foi projetada com uma arquitetura de microserviços para garantir escalabilidade e fácil manutenção. Este repositório é responsável pelo frontend da aplicação, desenvolvido com **Next.js**.

## Tecnologias Utilizadas

- **Next.js** (Última versão)
- **React.js**
- **Tailwind CSS** (Para estilização)
- **Microserviços** (Arquitetura distribuída)
- **API REST** (Para comunicação entre frontend e backend)
- **Node.js** (Ambiente de execução do backend)
- **Docker** (Para conteinerização dos serviços)

## Funcionalidades

- Cadastro e autenticação de estagiarios
- Visualização de métricas 
- Integração com microserviços de backend para dados de usuários, cursos e progresso

## Estrutura do Repositório

- **/src**: Contém o código-fonte da aplicação Next.js.
  - **/components**: Componentes reutilizáveis da interface.
  - **/pages**: Páginas da aplicação.
  - **/services**: Serviços para integração com APIs e microserviços.
  - **/styles**: Arquivos de estilização com Tailwind CSS.
  
- **/public**: Arquivos estáticos, como imagens e fontes.
- **next.config.js**: Configurações do Next.js.

## Instalação e Execução

### Pré-requisitos

- **Node.js** (>= 14.x)
- **npm** ou **yarn**
- **Docker** (opcional, se utilizar o ambiente em container)

### Passos para Instalar

1. Clone este repositório:

   ```bash
   git clone https://github.com/Projeto-PortalAcademy/frontend-academy.git
   ```

2. Instale as dependencias:

   ```bash
   npm i / npm install
   ```

### Avisos e padrões
O projeto base já esta padronizado entre pastas app, components, public e services

App - páginas
Components - componentes
Public - arquivos externos/mockados, fotos etc..
Services - funções que serão importadas para páginas e/ou componentes, responsáveis por comunicar com endpoints/db etc

Usar padrão de commit e bons costumes