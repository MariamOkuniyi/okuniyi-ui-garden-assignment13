
# Stage 1: Build the React application using Node.js.
FROM node:20-alpine AS build

# Set the working directory inside the container.
WORKDIR /app

# Copy package files first.
COPY package*.json ./

# Install the project dependencies.
RUN npm ci

# Copy the rest of the React project.
COPY . .

# Build the React application for production.
RUN npm run build

# Stage 2: Serve the production build using Nginx.
FROM nginx:alpine

# Copy the React production files into Nginx.
COPY --from=build /app/build /usr/share/nginx/html

# Nginx listens on port 80 inside the container.
EXPOSE 80

# Start the Nginx server.
CMD ["nginx", "-g", "daemon off;"]
