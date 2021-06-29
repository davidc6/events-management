FROM node:lts-alpine
# Linux Alpine does not have bash installed by default, install it
RUN apk update && apk upgrade && apk add bash
RUN mkdir -p /workspace/spa
WORKDIR /workspace/spa
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
