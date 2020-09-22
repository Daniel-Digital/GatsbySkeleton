FROM node:12.18.4

WORKDIR /app

COPY ./strapi-backend/package.json ./strapi-backend/yarn.lock ./

RUN yarn

COPY ./strapi-backend .

ENV DATABASE_FILENAME=.tmp/data.db
ENV NODE_ENV=production
ENV PORT 1337

RUN yarn run build

EXPOSE 1337

CMD [ "yarn run start" ]
