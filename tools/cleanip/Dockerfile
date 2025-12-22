FROM node:20-slim

WORKDIR /app

RUN npm init -y \
  && npm install itdog-web-api

COPY server.mjs /app/server.mjs

ENV PORT=7860
EXPOSE 7860

CMD ["node", "server.mjs"]
