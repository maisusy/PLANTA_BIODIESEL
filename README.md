----BACK-----

RUN 
python3 manage.py makemigrations --settings=core.settings.dev 
python3 manage.py migrate --settings=core.settings.dev 
python3 manage.py createsuperuser --settings=core.settings.dev 
python3 manage.py runserver --settings=core.settings.dev 

INSTALL
ENTORNO
sudo apt install python3-pip
sudo apt install python3-venv
python3 -m venv entorno
source entorno/bin/activate
 python3 -m pip install django
  python3 -m pip install django-admin
pip install djangorestframework
python3 -m pip install django-cors-headers
pip install psycopg2-binary
