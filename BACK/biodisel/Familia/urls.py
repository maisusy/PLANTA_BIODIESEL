from django.urls import re_path
from Familia import views

urlpatterns = [
    re_path(r'^api/familia$',views.familia_lista)
]