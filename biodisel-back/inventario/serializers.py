from rest_framework import  serializers
from inventario.models import Inventario

class InventarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventario
        fields = ['id','codigo', 'descripcion','caracteristicas']
