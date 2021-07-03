FROM python:3.6.8

RUN mkdir -p /usr/src/flask_app/
COPY requirements.txt /usr/src/flask_app/

WORKDIR /usr/src/flask_app/
RUN pip install -r requirements.txt

COPY . .
EXPOSE 5000
CMD ["gunicorn", "wsgi:application", "-w  2", "-b 0.0.0.0:8080", "-t 30"]