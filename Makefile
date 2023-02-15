PHP = docker exec -it -w /var/www lucian-php
NODE = docker exec -it -w /var/www lucian-node

init:
	@make env up composer-install yarn-install yarn-build

env:
	@echo "\n\e[92mChecking for existing env file\e[0m"
	@{ \
	if [ ! -f ./.env ]; then \
		echo "\e[91mEnv not found!\e[0m Creating...";\
		cp ./.env.local ./.env;\
		chmod 755 ./.env;\
		echo "\e[92mEnv file created. Please configure your env file.\e[0m\n";\
	else \
		echo "Env file \e[92mOK\e[0m.\n";\
	fi \
	} \

up:
	@docker-compose up -d --force-recreate

composer-install:
	@echo "\e[103;30m******************************         Composer Install          ******************************\e[0m\n"
	@$(PHP) composer install

yarn-install:
	@echo "\e[103;30m******************************         Composer Install          ******************************\e[0m\n"
	@$(NODE) yarn install

php:
	@echo "\e[103;30m******************************          PHP bash          ******************************\e[0m\n"
	@$(PHP) bash

node:
	@echo "\e[103;30m******************************          PHP bash          ******************************\e[0m\n"
	@$(NODE) sh

up-b:
	@docker-compose up -d --force-recreate --build

yarn-build build:
	@$(NODE) yarn build

yarn-build-prod:
	@$(NODE) yarn build-prod

yarn-watch watch:
	@$(NODE) yarn watch
