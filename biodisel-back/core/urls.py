from django.contrib import admin
from django.urls import path, include
from Familia import urls as familia_url
from inventario import urls as inventario_url


urlpatterns = [
    path('admin/', admin.site.urls),
    path('familia/', include(familia_url)),
    path('inventario/', include(inventario_url)),
]