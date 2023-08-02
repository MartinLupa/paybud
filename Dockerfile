# Base image for Node.js with your preferred version
FROM node:latest AS express

# Set the working directory inside the container
WORKDIR /app

# Copy the Express server files into the container
COPY protected-resource-server/dist /app

# Install Express server dependencies
RUN npm install
RUN cd dist/index.js && node index.js

# Expose the Express server port
EXPOSE 5000

# Start the Express server
CMD ["node", "index.js"]

# Nginx server
FROM nginx:latest AS nginx

# Copy the Nginx configuration files into the container
COPY reverse-proxy/config/nginx.conf /etc/nginx/nginx.conf
COPY reverse-proxy/config/default.conf /etc/nginx/d.conf/default.conf


# Expose the Nginx server port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
