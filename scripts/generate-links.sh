rm bin/dev-*

pushd dev
ls -d * | while read tool;
do
	echo env-start $tool "\$@" > ../bin/dev-$tool
	chmod +x ../bin/dev-$tool
done;
popd
