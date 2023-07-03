from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
 
from inventario_familia.models import Inventario_familia
from inventario_familia.serializers import InventarioFamiliaSerializer


class inventario_lista(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        '''
        List all the todo items for given requested user
        '''
        inventario = Inventario_familia.objects.all()#.filter(user = request.user.id)
        serializer = InventarioFamiliaSerializer(inventario, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        '''
        Create the Todo with given todo data
        '''
        data = {
            'codigo': request.data.get('codigo'), 
            'descripcion': request.data.get('descripcion'), 
            'caracteristicas': request.data.get('caracteristicas'), 
            #'user': request.user.id
        }
        serializer = InventarioFamiliaSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, *args, **kwargs):
        '''
        Deletes the todo item with given id if exists
        '''
        todo_instance = Inventario_familia.objects.all()
        if not todo_instance:
            return Response(
                {"res": "Object with todo id does not exists"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        todo_instance.delete()
        return Response(
            {"res": "Object deleted!"},
            status=status.HTTP_200_OK
        )



class inventario_id(APIView):

    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, id):
        '''
        Helper method to get the object with given id, and user_id
        '''
        try:
            return Inventario_familia.objects.get(id=id)
        except Inventario_familia.DoesNotExist:
            return None
    # 2. Retrieve
    def get(self, request, id, *args, **kwargs):
        '''
        Retrieves the Todo with given todo_id
        '''
        todo_instance = self.get_object(id)
        if not todo_instance:
            return Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = InventarioFamiliaSerializer(todo_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)
     # 3. Update
    def put(self, request, id, *args, **kwargs):
        '''
        Updates the todo item with given id if exists
        '''
        todo_instance = self.get_object(id)
        if not todo_instance:
            return Response(
                {"res": "Object with todo id does not exists"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        data = {
            'codigo': request.data.get('codigo'), 
            'descripcion': request.data.get('descripcion'), 
            'caracteristicas': request.data.get('caracteristicas'), 
        }
        serializer = InventarioFamiliaSerializer(instance = todo_instance, data=data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # 4. Delete
    def delete(self, request, id, *args, **kwargs):
        '''
        Deletes the todo item with given id if exists
        '''
        todo_instance = self.get_object(id)
        if not todo_instance:
            return Response(
                {"res": "Object with todo id does not exists"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        todo_instance.delete()
        return Response(
            {"res": "Object deleted!"},
            status=status.HTTP_200_OK
        )
    