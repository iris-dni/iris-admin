FROM node:8.16.0-alpine
COPY jsconfig.json package.json typings.json webpack.config.js /
COPY app /app
# build bundle.js(.map) in /public
RUN npm install && npm run build

FROM nginx:stable-alpine
COPY public /usr/share/nginx/html
COPY --from=0 /public /usr/share/nginx/html
RUN ln -s /config/settings.js /usr/share/nginx/html/settings.js && \
    echo "OK" > /usr/share/nginx/html/probe_status

