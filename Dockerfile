# base image
FROM node:12.2.0


WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install


# add app
COPY . /app
#construye la app
#RUN ng build

# start app
#CMD node _levanta-servicio.js
CMD npm run build
