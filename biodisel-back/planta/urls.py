from django.urls import path, include
from planta.views import (
    planta_lista,
)

urlpatterns = [
    path('api', planta_lista.as_view()),
]