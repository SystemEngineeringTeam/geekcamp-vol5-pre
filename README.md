# geekcamp-vol5-pre
## makeコマンドのつかいかた
- make
  - docker-compose up -d --build
- make run
  - docker-compose up -d
- make run/backend
  - goのコンテナを起動
- make run/database
  - mysqlコンテナを起動
- make run/build
  - docker-compose up -d --build
- make sh/database
  - mysqlコンテナに入る
- make sh/backend
  - goのコンテナに入る
- make down
  - docker-compose down
- make down/v
  - docker-compose down -v