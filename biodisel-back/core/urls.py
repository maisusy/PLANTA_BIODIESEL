from django.contrib import admin
from django.urls import path, include
from familia import urls as familia_url
from inventario_equipo import urls as inventario_equipo_url
from inventario_familia import urls as inventario_familia_url
from sector import urls as sector_url
from equipos import urls as equipos_url
from planta import urls as planta_url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('familia/', include(familia_url)),
    path('inventario_familia/', include(inventario_familia_url)),
    path('inventario_equipo/', include(inventario_equipo_url)),
    path('equipos/', include(equipos_url)),
    path('planta/', include(planta_url)),
    path('sector/', include(sector_url)),
]