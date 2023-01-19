#podman rmi $(podman images -f "dangling=true" -q)
podman image prune
