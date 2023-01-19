app="$1"
podman stop ${app} || true && podman rm ${app} || true
