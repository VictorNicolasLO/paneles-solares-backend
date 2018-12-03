FROM keymetrics/pm2:8-alpine

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g

WORKDIR /usr/app
COPY ./package.json /usr/app

RUN npm install

COPY . /usr/app
EXPOSE 3000
CMD ["pm2-runtime", "start","npm -- start"]