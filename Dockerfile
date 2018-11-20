FROM node:8.9.0-alpine

WORKDIR /sandbox/learningdocker

COPY . .

RUN npm install

CMD ["npm", "start"]

EXPOSE 4000