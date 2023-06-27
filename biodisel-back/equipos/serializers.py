
from rest_framework import  serializers
from equipos.models import Equipos

class EquiposSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipos
        fields = ['id','codigo', 'tipo']
