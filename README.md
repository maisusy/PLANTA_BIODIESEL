# -----BACK----- #

RUN 
```
python3 manage.py makemigrations --settings=core.settings.dev 
python3 manage.py migrate --settings=core.settings.dev 
python3 manage.py createsuperuser --settings=core.settings.dev 
python3 manage.py runserver --settings=core.settings.dev 
```
INSTALL ENTORNO
```bash
# actualizar paquetes
sudo apt install python3-pip
sudo apt install python3-venv

# crear y activar entorno
python3 -m venv entorno
source entorno/bin/activate

# instalar dependencias del backend
python3 -m pip install django
python3 -m pip install django-admin
pythin3 -m pip install djangorestframework
python3 -m pip install django-cors-headers
python3 -m pip install psycopg2-binary
pip install djangorestframework
pip install django-environ
pip install python-decouple
```

# ----FRONT----- #

RUN
```bash
ng runserve --open
```

INSTALL
```bash
npm install -g @angular/cli
npm i primeng
npm i primeflex 
npm i primeicons
npm i file-saver
npm i xlsx
npm i read-excel-file
```
O
```bash
npm i 
```
