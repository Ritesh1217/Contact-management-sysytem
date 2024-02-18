FROM node:20.10.0

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

COPY . .


RUN npm install



# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]