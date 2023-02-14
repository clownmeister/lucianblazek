FROM php:8.1-fpm-buster

RUN apt update && apt upgrade -y && apt-get install -y bash git zip unzip
RUN docker-php-ext-configure pcntl --enable-pcntl && docker-php-ext-install pcntl
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN pecl install xdebug
