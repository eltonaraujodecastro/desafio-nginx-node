# desafio-nginx-node
Desafio Docker NGINX-NODE Full Cycle   
Aplicação que a cada requisição feita(refresh) adiciona um Primeiro Nome de pessoa na tabela people no banco de dados mysql e
após isso faz select na tabela e lista no browser a lista de nomes cadastrados no banco de dados.   
NGINX fazando proxy reverso para a aplicação nodejs(express) que conecta ao banco de dados mysql

# Para rodar o projeto
```bash
docker compose up 
```
