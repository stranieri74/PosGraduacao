FROM ubuntu
RUN apt update
RUN APT install net-tools --yes #utiliza o cache para a atualização
RUN apt install vim --yes #executa sem o cache
RUN apt install curl --yes #muda a criação sem utilizar o cache

#juntando comando

RUN apt update && APT install net-tools && apt install vim --yes  && apt install curl --yes 
docker build
