from django.urls import path, include
from inventario.views import (
    inventario_lista,
)

urlpatterns = [
    path('api', inventario_lista.as_view()),
]