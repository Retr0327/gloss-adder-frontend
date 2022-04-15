FROM node:16-alpine AS builder

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./ ./ 

EXPOSE 3001

CMD ["npm", "run", "dev"]