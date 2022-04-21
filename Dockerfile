FROM node:16-alpine

WORKDIR /usr/src/app

ADD . .

RUN npm install

CMD ["npm","start"]

