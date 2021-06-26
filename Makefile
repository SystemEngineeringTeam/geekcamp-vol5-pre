COMPOSE=docker-compose
# FRONT=frontend
DOCKER=docker
BACK=geekcamp-vol5-pre_backend_1
DB=geekcamp-vol5-pre_mysql_1

run/build:
	$(COMPOSE) up -d --build

run/backend:
	$(COMPOSE) up -d --build $(BACK)

run/database:
	$(COMPOSE) up -d --build $(DB)

run:
	$(COMPOSE) up -d

sh/database:
	$(DOCKER) exec -it $(DB) bash

sh/backend:
	$(DOCKER) exec -it $(DB) ash

down:
	$(COMPOSE) down

down/v:
	$(COMPOSE) down -vol5
