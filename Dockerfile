# Step 1: Use official Node.js image as base image
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (if present) into the working directory
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the app code into the container
COPY . .

# Step 6: Expose the port the app will run on
EXPOSE 3005

# Step 7: Command to run the app
CMD ["npm", "run", "start:dev"]
