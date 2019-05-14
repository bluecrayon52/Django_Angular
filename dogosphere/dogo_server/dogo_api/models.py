from django.db import models
from django.contrib.auth.models import User

class Dog(models.Model):
    name = models.CharField(max_length=32)
    breed = models.CharField(max_length=32)
    bday = models.DateField()
    desc = models.CharField(max_length=256)
    owners = models.ManyToManyField(User, related_name="dogs")
     
