FROM node:13-alpine

WORKDIR /usr/src/services/mailer

COPY package.json .

COPY yarn.lock .

RUN yarn install

RUN yarn global add nodemon

RUN yarn global add typescript

RUN yarn global add ts-node

COPY . .

EXPOSE 5000

ENTRYPOINT [ "yarn", "run", "start:dev" ]