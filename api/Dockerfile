FROM node:17-bullseye-slim

COPY . /app

WORKDIR /app

RUN yarn

EXPOSE 8080

ENTRYPOINT ["node", "./src/index.js"]