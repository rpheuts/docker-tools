docker build -t dev/reactjs -f Dockerfile.ReactJS .
docker run -it -v $(pwd):/app -p 3000:3000 dev/reactjs /bin/bash
