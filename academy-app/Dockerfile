# Instalar dependências e construir o app
FROM node:18-alpine AS build

WORKDIR /app

# Copiar apenas os arquivos de dependência para melhorar o cache
COPY ./package.json ./package-lock.json ./
RUN npm install

# Copiar todo o código para o diretório de trabalho
COPY . .

# Construir o projeto para produção
RUN npm run build

# Servir a aplicação Next.js
FROM node:18-alpine

WORKDIR /app

# Copiar a aplicação e dependências instaladas da etapa anterior
COPY --from=build /app ./

EXPOSE 3000

CMD ["npm", "run", "start"]
