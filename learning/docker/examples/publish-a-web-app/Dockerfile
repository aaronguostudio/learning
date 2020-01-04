FROM nginx:latest

USER root

COPY ./nginx.conf /etc/nginx/conf.d/

RUN mkdir -p /app

WORKDIR /app

COPY ./app /app/

EXPOSE 80
