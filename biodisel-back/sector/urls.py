from django.urls import path, include
from sector.views import (
    sector_lista,
)

urlpatterns = [
    path('api', sector_lista.as_view()),
]