from django.contrib.auth.models import User
from dogo_server.dogo_api.models import Dog
from rest_framework import viewsets
from dogo_server.dogo_api.serializers import UserSerializer, DogSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class DogViewSet(viewsets.ModelViewSet):
    queryset = Dog.objects.all()
    serializer_class = DogSerializer