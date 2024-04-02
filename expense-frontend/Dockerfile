FROM node:20 as build

WORKDIR /App-frontend

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build
