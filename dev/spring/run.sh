docker build -t dev/spring -f Dockerfile.spring .
docker run -it -v $(pwd):/app --rm -p 8080 dev/spring /bin/bash
