# Use the official Node.js runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Copy the environment variables file to /app
COPY .env .

# Set environment variables
ENV $(cat .env | xargs)

# Copy the public folder to the dist directory
COPY public dist/public

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "run", "start"]