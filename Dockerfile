# Stage 1: Build the React application
FROM node:24-alpine AS build

# Required Assignment 13 working directory
WORKDIR /okuniyi_mariam_ui_garden_build_checks

# Copy dependency manifests
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy application source code
COPY . .

# Create the production React build
RUN npm run build

# Stage 2: Serve the production build with Nginx
FROM nginx:alpine

# Copy the compiled application into Nginx
COPY --from=build /okuniyi_mariam_ui_garden_build_checks/build /usr/share/nginx/html

# Nginx listens on port 80 inside the container
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]