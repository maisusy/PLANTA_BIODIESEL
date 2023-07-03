
from rest_framework import  serializers
from familia.models import Familia

class FamiliaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Familia
        fields = ['id','codigo', 'descripcion']
