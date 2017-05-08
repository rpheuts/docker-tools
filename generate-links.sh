rm bin/dev-*

pushd dev
ls -d * | while read tool;
do
	echo env-start.sh $tool > ../bin/dev-$tool
	chmod +x ../bin/dev-$tool
done;
popd
