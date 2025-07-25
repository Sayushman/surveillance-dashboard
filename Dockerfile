
FROM node:18-alpine AS deps


WORKDIR /app


COPY package.json package-lock.json* ./  
RUN npm install


COPY . .


RUN npm run build


FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production


COPY --from=deps /app/public ./public
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

 
EXPOSE 3000


CMD ["npm", "start"]
