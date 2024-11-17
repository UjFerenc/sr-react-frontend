FROM node:22.6.0

COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install

COPY ./src ./src
COPY ./public ./public
COPY .env .env

EXPOSE 8080
CMD ["npm", "start"]