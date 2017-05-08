docker build -t dev/aws -f Dockerfile.aws .
docker run -it --rm dev/aws /bin/bash
