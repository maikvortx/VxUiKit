FROM node:13

RUN mkdir /usr/app

WORKDIR /usr/app

ENV PATH=/project/node_modules/.bin:$PATH
ENV npm_config_tmp=/temp
ENV PORT='80'
ENV NODE_ENV='production'

## Install dependencies
COPY package*.json ./
RUN npm install

## Add source code
COPY . .
EXPOSE 80
CMD ["npm", "run", "start"]