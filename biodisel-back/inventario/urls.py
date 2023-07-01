from django.urls import path, include
from inventario.views import (
    inventario_lista,
    inventario_id
)

urlpatterns = [
    path('api', inventario_lista.as_view()),
    path('api/<int:id>/', inventario_id.as_view()),
]