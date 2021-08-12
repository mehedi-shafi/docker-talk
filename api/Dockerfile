FROM python:3.8-slim-buster

WORKDIR /app
ADD ./requirements.txt /app/api/

ADD .env /app/

RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r api/requirements.txt

ADD ./entrypoint.sh /app/api/
ADD ./ /app/api
RUN chmod +x /app/api/entrypoint.sh

RUN mkdir /media/app_media

VOLUME ["/media/app_media/"]

ENTRYPOINT /app/api/entrypoint.sh