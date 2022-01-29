FROM node:14-alpine as builder
WORKDIR /webapp
COPY . /webapp
RUN npm i
RUN npm run ng build -- --prod

FROM nginx:alpine
COPY --from=builder /webapp/dist/ngweb /usr/share/nginx/html

# docker build -t ngweb .
# docker image ls
# docker run --name ngweb -p 81:80 ngweb