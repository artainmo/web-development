# Docker

## Basics
A program may work on one development machine but not another one, this is due to different environments, different languages or language versions or libraries and other dependencies for example.<br>
Docker solves this problem by creating a container which refers to a small machine set with a particular environment, it thus makes the software program portable.<br>
Docker also has the benefit of creating different environments for different micro-services in one software application.<br>
Virtual machines also enable this but docker containers are more lightweight and thus are faster and easier.

Docker has to be installed differently on different OS.<br>
`docker --version` can be used to verify docker is installed.

Docker images are container templates/configurations, you can create one yourself in a dockerfile or use one from https://hub.docker.com/.
Docker daemon is a local background service that manages the containers.<br>
Docker client is a terminal/command-line-application that can be used to communicate with the docker daemon.

`docker info` returns the status of current containers and images.<br>
`docker ps -a` returns all running containers, ps means “Process Status” and -a means all (both stopped and running) containers.<br>
`docker images` returns the locally saved images.

`docker run imageName` builds a container from an image.<br>
`docker run --interactive imageName`, --interactive can be replaced with -i, it keeps the container up and running<br>
'run --name customName' is used to give the container a custom name.<br>
`run --rm` is used so that docker removes the container once it exits.<br>
`run -p 8888:8080`, leads to the server running on port 8080 inside the container and on local machine on http://localhost:8888/.<br>
`run -d`, runs the container in detached mode, meaning in background.<br>
`run exec` opens the terminal associated with the container enabling shell commands inside the container, it should be used with -i to keep the terminal open.
`docker system prune` removes all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes.

`docker stop containerName` can be used to stop containers running in background, $(docker ps -aq) as containerName refers to all containers<br>
`docker rm containerName` can be used to remove a container, $(docker ps -aq) as containerName refers to all containers<br>
`docker rmi imageName` can be used to remove images, $(docker images -q) as imageName refers to all images.

## Create an image
To create an image one has to create a Dockerfile at the root of the application, a Dockerfile is a file named Dockerfile that contains docker commands to create an image.

Dockerfile example for a java application:
<pre>
#dockerfile comments start with #
FROM java:8-jdk-alpine #This line tells docker our image will contain the java:8-jdk-alpine image as dependency

COPY ./build/libs/nasapicture-0.0.1-SNAPSHOT.war /usr/app/ #This line copies from local machine into container

WORKDIR /usr/app #This sets the following path as root, all following docker commands will be launched starting from this path 

EXPOSE 8080 #The EXPOSE instruction indicates the ports on which a container listens for connections

ENTRYPOINT ["java", "-jar", "nasapicture-0.0.1-SNAPSHOT.war"] #The last command launches/runs the application
</pre>

To build the image from the dockerfile a command is used: `docker build -t nameImage pathToDockerfile`

Once the image is created a container can be run based on this image with: `docker run --name containerName -i -d -p 3030:8080 imageName`.<br>
The application will run on local machine on http://localhost:3030/.

Dockerfile example for a nodejs application:
<pre>
FROM node:16 #node is a nodejs image from dockerhub and 16 indicates its latest version, our image will use the node image as dependency

WORKDIR /usr/src/app #We create the root directoy of our application

# package.json and package-lock.json hold the node application packages/dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied inside the container
COPY package*.json ./

RUN npm install # Install the dependencies inside the container from package.json to generate package-lock.json if it does not exist yet

COPY . . # Bring all the source code inside the container

EXPOSE 8080 #The EXPOSE instruction indicates the ports on which a container listens for connections

CMD [ "node", "server.js" ] #Launches/runs the application
</pre>


## Docker compose
When dividing an application into multiple micro-services, each micro-service will have own docker container.<br>
Instead of launching each container separately, all the containers can be launched in one command with docker-compose.

The app structure looks like this, at application root the docker-compose.yml and potentially in each micro-service root its dedicated dockerfile (if image is not created locally dockerfile is not necessary).<br>

To start the app and run all containers, the following command has to be run at application root:`docker-compose up`, the -d flag will launch in background and --force-recreate will stop old containers before creating new ones.<br>
`docker-compose down` stops the containers launched by docker-compose, `--rmi all` will also remove all containers and images.

Here is an example of a dockor-compose.yml for database, backend and frontend micro-services in one application called kanban:
<pre>
version: '3.8' #This indicates the version of the docker-compose file, the latest one is at the moment of writing 3.8
services: #After this all the micro-services can be defined

  kanban-postgres: #This is the first service name, that denotes a postgresql database
    image: "postgres:9.6-alpine" #This denotes the non-local image the container will use from https://hub.docker.com/
    container_name: kanban-postgres #Specifies the name of the outcome container
    ports:
      - 5432:5432 #This defines the local-machine-port:container-port
    environment: #Here environment variables can be declared for inside the container, postgresql needs specific variables to configure itself
      - POSTGRES_DB:kanban
      - POSTGRES_USER:kanban
      - POSTGRES_PASSWORD:kanban

  kanban-app: #This is the second micro-service and refers to the backend of the application
    build: ./kanban-app #build is used to build an image from a local dockerfile instead of using an already made image, its argument refers to dockerfile path
    container_name: kanban-app #Specifies the name of the outcome container
    environment: #Environment variables can be set to enable connection with the postgresql database by using them in the source-code
      - DB_SERVER=kanban-postgres
    ports:
      - 8080:8080 #This defines the local-machine-port:container-port
    depends_on:
      - kanban-postgres #This indicates that kanban-app is dependent upon kanban-postgres and thus kanban-app should only be started after kanban-postgres

  kanban-ui: #This is the third micro-service and refers to the frontend of the application
    build: ./kanban-ui #build is used to build an image from a local dockerfile instead of using an already made image, its argument refers to dockerfile path
    container_name: kanban-ui #Specifies the name of the outcome container
    ports: #This defines the local-machine-port:container-port
      - 4200:80
    depends_on:
      - kanban-app #This indicates that kanban-ui is dependent upon kanban-app and thus kanban-ui should only be started after kanban-app
</pre>
