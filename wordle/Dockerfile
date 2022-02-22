FROM node:17-bullseye-slim

COPY . /app

WORKDIR /app

RUN yarn

RUN yarn global add serve

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "build"]