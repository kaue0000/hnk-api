FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM base AS dev
EXPOSE 3333
CMD ["node", "ace", "serve", "--hmr"]

FROM base AS build
COPY . .
RUN node ace build

FROM node:20-alpine AS production
WORKDIR /app
COPY --from=build /app/build ./
RUN npm ci --omit=dev
EXPOSE 3333
CMD ["node", "bin/server.js"]