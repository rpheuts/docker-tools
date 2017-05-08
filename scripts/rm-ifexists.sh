app="$1"
docker stop ${app} || true && docker rm ${app} || true
