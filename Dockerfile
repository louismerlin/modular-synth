FROM node:11.8.0-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
CMD ["yarn", "start"]
