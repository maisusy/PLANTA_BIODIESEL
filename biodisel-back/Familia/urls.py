from django.urls import path, include
from Familia.views import (
    familia_lista,
)

urlpatterns = [
    path('api', familia_lista.as_view()),
]