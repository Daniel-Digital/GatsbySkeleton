FROM node:12.18.4
# Building strapi

WORKDIR /app

COPY ./strapi-backend/package.json ./strapi-backend/yarn.lock ./

RUN yarn

COPY ./strapi-backend .

ENV DATABASE_FILENAME=.tmp/data.db
ENV NODE_ENV=production
ENV PORT 80

RUN yarn run build

EXPOSE 80

CMD [ "yarn run start" ]
