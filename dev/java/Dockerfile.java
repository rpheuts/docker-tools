FROM ubuntu:latest

# Upgrading system
RUN apt update && apt -y install wget unzip default-jdk && apt autoclean
