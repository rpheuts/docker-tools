FROM amazonlinux:latest

ENV JAVA_VERSION 8u171
ENV BUILD_VERSION b11
ENV ANDROID_SDK_VERSION 3859397
 
# Upgrading system
RUN yum -y upgrade && yum -y install wget which unzip expect && yum -y clean all 
 
# Downloading & Config Java 8
RUN wget --no-cookies --no-check-certificate --header "Cookie: oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/${JAVA_VERSION}-${BUILD_VERSION}/512cd62ec5174c3487ac17c61aaa89e8/jdk-${JAVA_VERSION}-linux-x64.rpm" -O /tmp/jdk-8-linux-x64.rpm
RUN yum -y install /tmp/jdk-8-linux-x64.rpm && \
  alternatives --install /usr/bin/java jar /usr/java/latest/bin/java 200000 && \
  alternatives --install /usr/bin/javaws javaws /usr/java/latest/bin/javaws 200000 && \
  alternatives --install /usr/bin/javac javac /usr/java/latest/bin/javac 200000
ENV JAVA_HOME /usr/java/latest/jre

# Download and untar Android SDK tools
RUN mkdir -p /opt/android-sdk-linux && wget https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip -O tools.zip && \
  unzip tools.zip -d /opt/android-sdk-linux && rm tools.zip

# Set Android environment
ENV ANDROID_HOME /opt/android-sdk-linux
ENV PATH ${ANDROID_HOME}/tools:$ANDROID_HOME/platform-tools:$PATH

# Accept Android licenses
RUN yes | /opt/android-sdk-linux/tools/bin/sdkmanager --licenses


# Update and install using sdkmanager
RUN $ANDROID_HOME/tools/bin/sdkmanager "tools" "platform-tools" "build-tools;27.0.3" \
  "platforms;android-27" "extras;android;m2repository" "extras;google;m2repository" \
  "extras;m2repository;com;android;support;constraint;constraint-layout;1.0.2" "extras;m2repository;com;android;support;constraint;constraint-layout-solver;1.0.2"
