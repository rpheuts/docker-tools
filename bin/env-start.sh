docker run -it --rm -v $(PWD):/workspace -w="/workspace" ${@:2} rpheuts/env-$1 /bin/bash
