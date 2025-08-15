# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Set build-time environment variables
ARG VITE_SHARED_URL=http://shared:4173/assets/remoteEntry.js
ENV VITE_SHARED_URL=$VITE_SHARED_URL

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build (CI: no type checking)
RUN npm run build:ci

# Production stage
FROM nginx:alpine

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]