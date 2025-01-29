FROM node:alpine3.20
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npx", "json-server", "-w" ,"db.json"]