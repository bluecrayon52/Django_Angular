from django.contrib.auth.models import User
from dogo_server.dogo_api.models import Dog
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'username', 'email', 'dogs')


class DogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dog
        fields = ('id', 'name', 'breed', 'bday', 'desc', 'owners')

