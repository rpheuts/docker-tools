FROM amazonlinux:latest

ENV GO_VERSION 1.8.3

RUN yum -y update && yum -y install wget && yum clean all
RUN wget https://storage.googleapis.com/golang/go${GO_VERSION}.linux-amd64.tar.gz && \
  tar -C /usr/local -xzf go${GO_VERSION}.linux-amd64.tar.gz

ENV PATH ${PATH}:/usr/local/go/bin
