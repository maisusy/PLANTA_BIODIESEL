from django.contrib import admin
from django.urls import path, include
from Familia import urls as familia_url
from inventario import urls as inventario_url
from sector import urls as sector_url
from equipos import urls as equipos_url
from planta import urls as planta_url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('familia/', include(familia_url)),
    path('inventario/', include(inventario_url)),
    path('equipos/', include(equipos_url)),
    path('planta/', include(planta_url)),
    path('sector/', include(sector_url)),
]