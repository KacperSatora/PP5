FROM node:alpine3.20git  AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Setup and Serve App with JSON Server
FROM node:18
WORKDIR /app
COPY --from=build /app/dist/your-angular-app /usr/share/nginx/html
COPY db.json ./

# Install json-server globally
RUN npm install -g json-server

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose necessary ports
EXPOSE 80 3000

# Start both json-server and Angular app
CMD json-server --watch db.json --port 3000 & nginx -g 'daemon off;'
