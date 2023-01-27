FROM node:19-alpine AS build

WORKDIR /build

COPY ./ ./

RUN npm install
RUN npm run build

FROM node:19-alpine

WORKDIR /app

COPY ./package.json package.json
COPY --from=build /build/dist /app/dist

RUN npm install --production

CMD [ "npm", "run", "start:prod" ]