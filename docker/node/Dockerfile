FROM node:18-alpine

RUN apk add --no-cache bash
RUN touch /.yarnrc && chmod 777 /.yarnrc
RUN mkdir -p /.cache/yarn && chmod 777 -R /.cache
RUN mkdir /.yarn && chmod 777 -R /.yarn

WORKDIR /var/www
