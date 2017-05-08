DOCKER_REPOS="rpheuts"

pushd dev
ls -d * | while read tool;
do
	DEV_TOOL=${tool}
	pushd $tool
	docker build -t ${DOCKER_REPOS}/${DEV_TOOL} -f Dockerfile.${DEV_TOOL} .
	popd
done;
popd

