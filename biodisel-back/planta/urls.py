from django.urls import path, include
from planta.views import (
    planta_lista,
    planta_id
)

urlpatterns = [
    path('api', planta_lista.as_view()),
    path('api/<int:id>/', planta_id.as_view()),
]