# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code to the working directory
COPY . .

# Expose port 3000 (the default port for Express.js)
EXPOSE 3222

# Command to run the application
CMD ["node", "app.js"]