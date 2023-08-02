# Use the official Node.js image as the base image
FROM node AS protected-resource-server

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy all the application files to the working directory
COPY . .

# Expose port 3000 for incoming requests
EXPOSE 5000

# Start the Express application
CMD ["npm", "start"]
