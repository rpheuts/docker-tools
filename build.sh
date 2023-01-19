DOCKER_REPOS="rpheuts"
HUB_NAME="docker.io"

podman login --username ${DOCKER_REPOS} ${HUB_NAME}

pushd dev
ls -d * | while read tool;
do
	DEV_TOOL=${tool}
	pushd $tool
	podman build -t ${HUB_NAME}/${DOCKER_REPOS}/env-${DEV_TOOL}-`uname -m` -f Dockerfile.${DEV_TOOL} .
	podman push ${HUB_NAME}/${DOCKER_REPOS}/env-${DEV_TOOL}-`uname -m`
	popd
done;
popd

./scripts/generate-links.sh
