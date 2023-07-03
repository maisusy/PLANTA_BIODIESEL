from rest_framework import  serializers
from inventario_equipo.models import Inventario_equipo

class InventarioEquipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventario_equipo
        fields = ['id','codigo', 'descripcion','caracteristicas']
