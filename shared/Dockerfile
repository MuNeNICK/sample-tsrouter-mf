# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 4173
EXPOSE 4173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]