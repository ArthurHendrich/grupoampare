FROM mongo:6
COPY ./secrets/mongodb-keyfile /etc/mongodb-keyfile
RUN chown mongodb:mongodb /etc/mongodb-keyfile && chmod 400 /etc/mongodb-keyfile
CMD ["mongod", "--replSet", "rs0", "--keyFile", "/etc/mongodb-keyfile"]
