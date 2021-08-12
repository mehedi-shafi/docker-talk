FROM node:12.22-alpine as build

WORKDIR /app/frontend
COPY ./front-end/package.json ./
COPY ./front-end/package-lock.json ./
RUN npm ci
COPY ./front-end/ ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]