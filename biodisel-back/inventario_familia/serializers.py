from rest_framework import  serializers
from inventario_familia.models import Inventario_familia

class InventarioFamiliaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventario_familia
        fields = ['id','codigo', 'descripcion','caracteristicas']
