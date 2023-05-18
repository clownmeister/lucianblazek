FROM php:8.1-fpm-buster

ARG DEV_UID
ARG DEV_GID
ENV DEV_UID=$DEV_UID
ENV DEV_GID=$DEV_GID
ENV USER=dev
ENV GROUP=dev

RUN apt update && apt upgrade -y && apt-get install -y bash git zip unzip
RUN docker-php-ext-configure pcntl --enable-pcntl && docker-php-ext-install pcntl
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN pecl install xdebug

RUN groupadd -g $DEV_GID $GROUP || echo "Group ${DEV_GID} already exists. Skipping."
RUN useradd -m --uid $DEV_UID --gid $DEV_GID -s /bin/bash $USER || echo "User ${DEV_UID} already exists. Skipping"

USER $DEV_UID
WORKDIR /var/www
