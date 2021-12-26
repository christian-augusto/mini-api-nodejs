FROM node:16.13.1

WORKDIR /webserver/src

COPY src/ .

RUN npm install
