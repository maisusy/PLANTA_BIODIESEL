from django.urls import path, include
from equipos.views import (
    equipos_lista,
)

urlpatterns = [
    path('api', equipos_lista.as_view()),
]