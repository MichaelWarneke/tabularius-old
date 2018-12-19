FROM node:10-alpine as dev
LABEL maintainer="Michael Warneke <michael.warneke@outlook.com.au>"
LABEL authors="Michael Warneke"

RUN apt-get update && apt-get install -y \
  bash \
  git \
  nano

WORKDIR /workdir

VOLUME ["/workdir"]

RUN npm install -g @angular/cli

EXPOSE 4200
