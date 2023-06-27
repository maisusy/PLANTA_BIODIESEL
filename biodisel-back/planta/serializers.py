
from rest_framework import  serializers
from planta.models import Planta

class PlantaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planta
        fields = ['id','codigo', 'nombre']
