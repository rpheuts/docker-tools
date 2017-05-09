# Docker-Tools

Instant develop environment anywhere with a single command using Docker. Tiny infrastructure that provides a simple way of using containerized development environments.

## Install (OSX / Linux):
~~~~
./scripts/generate-links.sh
source ./scripts/dockertools.source
~~~~

You can now run:
~~~~
dev-go
~~~~
or
~~~~
dev-java
~~~~
for example to start a Go development environment with your current directory mapped into the container at /workspace. The first time it'll need to pull the containers from Docker Hub, subsequent invocations are going to be near instant.

All dev-<language> options can be found in the 'dev' folder of this repository. 

## Build locally

 1. Edit build.sh and update the Docker Hub account
 2. Run build.sh
 
This will build all the containers locally (might take a while) and push them to the specified Docker Hub account.

