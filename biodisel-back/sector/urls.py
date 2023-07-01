from django.urls import path, include
from sector.views import (
    sector_lista,
    sector_id,
)

urlpatterns = [
    path('api', sector_lista.as_view()),
    path('api/<int:id>/', sector_id.as_view()),
]