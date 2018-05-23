FROM amazonlinux:latest
ENV NODE_VERSION v8.11.2

RUN yum install gcc44 gcc-c++ libgcc44 cmake wget git -y && yum clean all

# Install node
RUN wget http://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}.tar.gz && \
	tar -zxvf node-${NODE_VERSION}.tar.gz && \
	pushd node-${NODE_VERSION} && ./configure && make && \
	make install && \
	popd && rm -rf node-${NODE_VERSION}
  

RUN npm install -g create-react-app yarn
