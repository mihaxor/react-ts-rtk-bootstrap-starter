FROM node:24.3.0-alpine

WORKDIR /app

COPY package.json /app/
#COPY yarn.lock /app/

RUN corepack enable

RUN yarn install

COPY ./ /app/

RUN yarn build

RUN yarn global add serve

EXPOSE 3000
CMD ["serve", "-s", "build"]