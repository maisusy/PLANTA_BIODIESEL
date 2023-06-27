from django.contrib import admin
from django.urls import path, include
from Familia import urls as familia_url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('familia/', include(familia_url)),
]