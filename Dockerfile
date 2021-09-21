FROM node AS development
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .

# z

RUN npm run build
 
CMD ["node", "dist/main"]