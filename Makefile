init:
	@make up
	@make install

up:
	docker-compose up -d --force-recreate

install:
	@composer install
