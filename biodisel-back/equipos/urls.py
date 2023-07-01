from django.urls import path, include
from equipos.views import (
    equipos_lista,
    equipos_id
)

urlpatterns = [
    path('api', equipos_lista.as_view()),
    path('api/<int:id>/', equipos_id.as_view()),
]