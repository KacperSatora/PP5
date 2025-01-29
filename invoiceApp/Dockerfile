FROM node:alpine3.20
WORKDIR /app

COPY package*.json tsconfig*.json ./
RUN npm install
RUN npm i -g @angular/cli
COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]