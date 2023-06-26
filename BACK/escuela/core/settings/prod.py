from .dev import *
from pathlib import Path

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'FAMILIA_PROD.sqlite3',
    }
}
