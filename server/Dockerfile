# base image
FROM python:3.6.6-slim

# install netcat
RUN apt-get update && \
    apt-get -y install netcat && \
    apt-get clean

# set working directory
WORKDIR /usr/src/app

ENV FLASK_APP manage.py

# add and install requirements
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

# add entrypoint.sh
COPY ./boot.sh /usr/src/app/boot.sh

# add app
COPY . /usr/src/app

RUN chmod +x /usr/src/app/boot.sh

# run server
CMD ["/usr/src/app/boot.sh"]