#docker rm -v $(docker ps -a -q -f status=exited)
docker container prune
