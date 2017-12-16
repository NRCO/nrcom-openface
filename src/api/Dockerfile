FROM node:7

# copie des sources
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ADD . /app

# installation des dépendances
RUN npm install --no-cache

CMD [ "npm", "run", "app" ]
