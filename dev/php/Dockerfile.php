FROM amazonlinux:latest
ENV PHP_VERSION php70

RUN yum update -y && yum install -y \
curl sudo httpd24 mod24_ssl ${PHP_VERSION} ${PHP_VERSION}-bcmath ${PHP_VERSION}-cli ${PHP_VERSION}-common ${PHP_VERSION}-dba \
${PHP_VERSION}-dbg ${PHP_VERSION}-enchant ${PHP_VERSION}-fpm ${PHP_VERSION}-gd ${PHP_VERSION}-gmp ${PHP_VERSION}-imap ${PHP_VERSION}-intl \
${PHP_VERSION}-json ${PHP_VERSION}-ldap ${PHP_VERSION}-mbstring ${PHP_VERSION}-mcrypt ${PHP_VERSION}-mysqlnd ${PHP_VERSION}-odbc \
${PHP_VERSION}-opcache ${PHP_VERSION}-pdo ${PHP_VERSION}-pdo-dblib ${PHP_VERSION}-pecl-igbinary ${PHP_VERSION}-pecl-imagick \
${PHP_VERSION}-pecl-memcached ${PHP_VERSION}-pecl-oauth ${PHP_VERSION}-pecl-ssh2 ${PHP_VERSION}-pecl-uuid ${PHP_VERSION}-pecl-yaml \
${PHP_VERSION}-pgsql ${PHP_VERSION}-process ${PHP_VERSION}-pspell ${PHP_VERSION}-recode ${PHP_VERSION}-snmp ${PHP_VERSION}-soap ${PHP_VERSION}-tidy \
${PHP_VERSION}-xml ${PHP_VERSION}-xmlrpc ${PHP_VERSION}-zip mysql56-server && yum clean all

RUN mkdir /app
WORKDIR /app

RUN curl -sS https://getcomposer.org/installer | php
