FROM node:18 as build

WORKDIR /App-Frontend

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build
