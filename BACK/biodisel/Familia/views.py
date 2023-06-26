from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from Familia.models import Familia
from Familia.serializers import FamiliaSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST', 'DELETE'])
def familia_lista(request):
    if request.method == 'GET':
        familias = Familia.objects.all()
        
        # codigo = request.query_params.get('codigo', None)
        # if codigo is not None:
        #     familias = familias.filter(title__icontains=codigo)
        
        familias_serializer = FamiliaSerializer(familias, many=True)
        return JsonResponse(familias_serializer.data, safe=False)
        # 'safe=False' for objects serialization
 
    elif request.method == 'POST':
        familia_data = JSONParser().parse(request)
        familia_serializer = FamiliaSerializer(data=familia_data)
        if familia_serializer.is_valid():
            familia_serializer.save()
            return JsonResponse(familia_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(familia_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Familia.objects.all().delete()
        return JsonResponse({'message': '{} La familia se borro corecctamente'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)