# Builder stage
FROM node:20.12.2 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json, package-lock.json, and tsconfig.json to the container
COPY package*.json tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build


# Final image
FROM node:20.12.2 AS final

# Set the working directory in the container
WORKDIR /app

# Copy the compiled code from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
