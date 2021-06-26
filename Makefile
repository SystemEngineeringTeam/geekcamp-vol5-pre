COMPOSE=docker-compose
# FRONT=frontend
DOCKER=docker
BACK=geekcamp-vol5-pre_backend_1
DB=geekcamp-vol5-pre_mysql_1

run:
	$(COMPOSE) up -d

run/build:
	$(COMPOSE) up -d --build

sh/database:
	$(DOCKER) exec -it $(DB) bash

sh/backend:
	$(DOCKER) exec -it $(DB) ash


