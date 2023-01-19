FROM ubuntu:latest
ENV PHP_VERSION php

RUN apt update && DEBIAN_FRONTEND=noninteractive apt install -y \
curl sudo apache2 ${PHP_VERSION} ${PHP_VERSION}-bcmath ${PHP_VERSION}-cli ${PHP_VERSION}-common ${PHP_VERSION}-dba \
${PHP_VERSION}-phpdbg ${PHP_VERSION}-enchant ${PHP_VERSION}-fpm ${PHP_VERSION}-gd ${PHP_VERSION}-gmp ${PHP_VERSION}-imap ${PHP_VERSION}-intl \
${PHP_VERSION}-json ${PHP_VERSION}-ldap ${PHP_VERSION}-mbstring ${PHP_VERSION}-mysqlnd ${PHP_VERSION}-odbc \
${PHP_VERSION}-opcache ${PHP_VERSION}-pdo ${PHP_VERSION}-pdo-dblib \
${PHP_VERSION}-pgsql ${PHP_VERSION}-pspell ${PHP_VERSION}-snmp ${PHP_VERSION}-soap ${PHP_VERSION}-tidy \
${PHP_VERSION}-xml ${PHP_VERSION}-xmlrpc ${PHP_VERSION}-zip mysql-server && apt autoclean

RUN curl -sS https://getcomposer.org/installer | php
