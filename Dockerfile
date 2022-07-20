FROM node:14 as build-deps

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm i
RUN npm i -g serve
COPY . ./
RUN npm run build

# Serve command, remove if no need
CMD serve -s build