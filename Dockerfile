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

# Set environment variables
ENV NODE_ENV=production

# Expose port 3001 for the application to listen on
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
