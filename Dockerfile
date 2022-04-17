FROM node:16-alpine AS dev

# minimize image size
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./ ./ 

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]