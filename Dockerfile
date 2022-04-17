FROM node:16-alpine

WORKDIR /app

RUN chown -R node:node /app

USER node

WORKDIR /app

COPY --chown=node:node ./package*.json ./

RUN npm install

COPY --chown=node:node . /app

RUN npm run build

EXPOSE 3001