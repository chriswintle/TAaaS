FROM node:5-wheezy
WORKDIR /app
ADD / /app
RUN npm install -g nodemon
RUN npm install
EXPOSE 3010
CMD npm start