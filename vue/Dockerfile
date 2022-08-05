FROM node:16

RUN yarn global add @vue/cli

WORKDIR /usr/src/griptape

COPY . .

ARG app=contracts

WORKDIR /usr/src/griptape/hello-${app}

RUN yarn && yarn add @stakeordie/griptape.js
