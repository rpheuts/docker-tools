DOCKER_REPOS="rpheuts"

docker login

pushd dev
ls -d * | while read tool;
do
	DEV_TOOL=${tool}
	pushd $tool
	docker build -t ${DOCKER_REPOS}/env-${DEV_TOOL} -f Dockerfile.${DEV_TOOL} .
	docker push ${DOCKER_REPOS}/env-${DEV_TOOL}
	popd
done;
popd

./scripts/generate-links.sh
