# Use Node.js version 20 with Alpine as the base image
FROM node:20-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Make port 8080 available outside the container
EXPOSE 8080

# Run the application when the container launches
CMD ["node", "app.js"]