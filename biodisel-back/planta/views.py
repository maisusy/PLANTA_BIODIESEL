from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
 
from planta.models import  Planta
from planta.serializers import PlantaSerializer


class planta_lista(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        '''
        List all the todo items for given requested user
        '''
        planta =  Planta.objects.all()#.filter(user = request.user.id)
        serializer =  PlantaSerializer(planta, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        '''
        Create the Todo with given todo data
        '''
        data = {
            'codigo': request.data.get('codigo'), 
            'descripcion': request.data.get('descripcion'), 
            #'user': request.user.id
        }
        serializer =  PlantaSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)