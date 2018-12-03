FROM keymetrics/pm2:8-alpine

WORKDIR /usr/app
COPY ./package.json /usr/app

RUN npm install

COPY . /usr/app
EXPOSE 3000
CMD ["pm2-runtime", "start","npm -- start"]