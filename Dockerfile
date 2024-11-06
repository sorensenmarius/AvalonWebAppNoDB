FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# The rest will be mounted as a volume, so no need to copy all files.
EXPOSE 3000
CMD ["npm", "start"]
