FROM node

WORKDIR /usr

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN [ "npm", "run" , "build" ]

# RUN [ "npm", "run", "start:dev" ]

RUN [ "node", "dist/main.js" ]