PHP = docker exec -it -w /var/www lucian-php

init:
	@make env up install

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

install:
	@echo "\e[103;30m******************************         Install          ******************************\e[0m\n"
	@$(PHP) composer install

bash:
	@echo "\e[103;30m******************************          PHP bash          ******************************\e[0m\n"
	@$(PHP) bash
