from django.db import models

# Create your models here.
class Familia(models.Model):
    codigo = models.CharField(max_length=50)
    descripcion = models.TextField()
    def __str__(self):
        return self.codigo
    