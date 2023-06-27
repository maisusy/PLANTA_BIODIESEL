from django.urls import path, include
from Familia.views import (
    familia_lista,
    familia_id
)

urlpatterns = [
    path('api', familia_lista.as_view()),
    path('api/<int:id>/', familia_id.as_view()),
]