#cria a imagem com a versão do node 16.3.2
FROM node: 22.13.1
#Criando arquivo
WORKDIR  /app 
#copiando pacote
COPY packager*.json ./ 
RUN npm install
#copiando tudo
COPY . .
#define a porta para conectar
EXPOSE 8080
#inicializando
CMD ["node", "server.js"]