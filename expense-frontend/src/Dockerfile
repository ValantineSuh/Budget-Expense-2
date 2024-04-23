# Builder stage
FROM node:20.12.2 AS build


WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:20.12.2 AS final

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./


EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
