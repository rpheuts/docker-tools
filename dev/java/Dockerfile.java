FROM amazonlinux:latest

ENV JAVA_VERSION 8u131
ENV JAVA_HASH_VERSION d54c1d3a095b4ff2b6607d096fa80163
ENV BUILD_VERSION b11
 
# Upgrading system
RUN yum -y upgrade
RUN yum -y install wget which
 
# Downloading & Config Java 8
RUN wget --no-cookies --no-check-certificate --header "Cookie: oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/$JAVA_VERSION-$BUILD_VERSION/${JAVA_HASH_VERSION}/jdk-$JAVA_VERSION-linux-x64.rpm" -O /tmp/jdk-8-linux-x64.rpm
RUN yum -y install /tmp/jdk-8-linux-x64.rpm
#RUN alternatives --install /usr/bin/java jar /usr/java/latest/bin/java 200000
#RUN alternatives --install /usr/bin/javaws javaws /usr/java/latest/bin/javaws 200000
#RUN alternatives --install /usr/bin/javac javac /usr/java/latest/bin/javac 200000
