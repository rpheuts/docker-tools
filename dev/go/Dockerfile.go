FROM ubuntu:latest

ENV GO_VERSION 1.19.5

RUN apt -y update && apt -y install wget && apt autoclean
RUN wget https://storage.googleapis.com/golang/go${GO_VERSION}.linux-`uname -m  | sed s/aarch64/arm64/g`.tar.gz && \
  tar -C /usr/local -xzf go${GO_VERSION}.linux-`uname -m  | sed s/aarch64/arm64/g`.tar.gz

ENV PATH ${PATH}:/usr/local/go/bin
