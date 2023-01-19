#docker rm -v $(docker ps -a -q -f status=exited)
podman container prune
