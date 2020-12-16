FROM node:13
RUN mkdir /usr/app
WORKDIR /usr/app

ENV NODE_ENV='production'
ENV PORT='80'

## Install dependencies
COPY package*.json ./

RUN npm install

## Add source code
COPY . .

EXPOSE 80

RUN npm run build

ENTRYPOINT ["npm", "start"]