#!/bin/sh

until cd /app/api/
do
    echo "Waiting for server volume ..."
done

until ./manage.py migrate
do
    echo "Waiting for db to be ready ..."
    sleep 2
done

./manage.py collectstatic --noinput

# you can use either. its no big deal
# gunicorn api.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4
./manage.py runserver 0.0.0.0:8000