FROM node:14.15.0-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD [ "node", "app.js" ]

