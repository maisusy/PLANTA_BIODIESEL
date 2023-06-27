from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Planta(models.Model):
    codigo = models.CharField(max_length=50)
    nombre = models.TextField()
    #user = models.ForeignKey(User, on_delete = models.CASCADE, blank = True, null = True)
    def __str__(self):
        return self.codigo
    