# Docker

A program may work on one development machine but not another one, this is due to different environments, different languages or language versions or libraries and other dependencies for example.<br>
Docker solves this problem by creating a container which refers to a small machine set with a particular environment, it thus makes the software program portable.<br>
Docker also has the benefit of creating different environments for different micro-services in one software application.<br>
Virtual machines also enable this but docker containers are more lightweight and thus are faster and easier.

Docker has to be installed differently on different OS.<br>
`docker --version` can be used to verify docker is installed.

Docker images are container templates/configurations, you can create one yourself or use one from https://hub.docker.com/.
Docker daemon is a local background service that manages the containers.<br>
Docker client is a terminal/command-line-application that can be used to communicate with the docker daemon.

`docker info` returns the status of current containers and images.<br>
`docker ps -a` returns all running containers, ps means “Process Status” and -a means all (both stopped and running) containers.<br>
`docker images` returns the locally saved images.

`docker run imageName` builds a container from an image.<br>
`docker run --interactive imageName` keeps a terminal open associated with the container, thus enables terminal commands in the container, --interactive can be replaced with -i, it also keeps the container up and running<br>
'run --name customName' is used to give the container a custom name.<br>
`run --rm` is used so that docker removes the container once it exits.<br>
`run -p 8888:8080`, leads to the server running on port 8080 inside the container and on local machine on http://localhost:8888/.

`docker stop containerName` can be used to stop containers running in background.<br>

